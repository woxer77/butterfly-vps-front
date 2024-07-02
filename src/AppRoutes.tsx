import React from 'react';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoute from "./components/elements/ProtectedRoute/ProtectedRoute";

import useLazy from "./hooks/common/useLazy";
import { useAppDispatch } from "./hooks/common/redux";
import useWebpSupport from "./hooks/common/useWebpSupport";
import { setServices, setWebp } from "./redux/slices/userSlice";
import { useQuery } from "@tanstack/react-query";
import { getAllServices } from "./services/user";
import { IServiceShortInfo } from "./ts/interfaces/types";

const AppRoutes: React.FC = () => {
  const HomeLazy = useLazy(() => import("./components/pages/Home/Home"));
  const AboutLazy = useLazy(() => import("./components/pages/About/About"));
  const EquipmentLazy = useLazy(() => import("./components/pages/Equipment/Equipment"));
  const ServicesContainerLazy = useLazy(() => import("./containers/pages/ServicesContainer"));
  // const ProjectsLazy = useLazy(() => import("./components/pages/Projects/Projects"));
  const AdminLazy = useLazy(() => import("./components/pages/Admin/Admin"));
  const AddServiceLazy = useLazy(() => import("./components/pages/AddService/AddService"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLazy/>,
    },
    {
      path: "/about",
      element: <AboutLazy/>,
    },
    {
      path: "/equipment",
      element: <EquipmentLazy/>,
    },
    {
      path: "/services/:serviceId",
      element: <ServicesContainerLazy/>,
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/add-service",
          element: <AddServiceLazy />,
        },
        {
          path: "*",
          element: <div>This page does not exist</div>,
        },
      ]
    },
    /*{
      path: "/projects",
      element: <ProjectsLazy/>,
    },*/
    {
      path: "/admin",
      element: <AdminLazy/>,
    },
    {
      path: "*",
      element: <div>This page does not exist</div>,
    },
  ]);

  const dispatch = useAppDispatch();
  const isWebpSupported = useWebpSupport();

  React.useEffect(() => {
    dispatch(setWebp(isWebpSupported));
  }, [isWebpSupported]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['getAllServices'],
    queryFn: () => getAllServices(),
    refetchOnWindowFocus: false
  });
  const services_DB = data?.data as IServiceShortInfo[] || [];

  React.useEffect(() => {
    if (isLoading || isError) return;

    dispatch(setServices(services_DB));
  }, [isLoading, isError, services_DB]);

  return (
    <RouterProvider router={router} />
  );
};

export default AppRoutes;

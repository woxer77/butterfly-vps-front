import React from 'react';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoute from "./components/elements/ProtectedRoute/ProtectedRoute";
import Layout from "./components/elements/Layout/Layout";

import useLazy from "./hooks/common/useLazy";
import { useWebpSupportAndSet } from "./hooks/AppRoutes/useWebpSupportAndSet";
import { useGetAllServices } from "./hooks/AppRoutes/useGetAllServices";
import { useCheckAuth } from "./hooks/AppRoutes/useCheckAuth";

const AppRoutes: React.FC = () => {
  const HomeLazy = useLazy(() => import("./components/pages/Home/Home"));
  const AboutLazy = useLazy(() => import("./components/pages/About/About"));
  const EquipmentLazy = useLazy(() => import("./components/pages/Equipment/Equipment"));
  const ServicesContainerLazy = useLazy(() => import("./containers/pages/ServicesContainer"));
  const ProjectsLazy = useLazy(() => import("./components/pages/Projects/Projects"));
  const AdminLazy = useLazy(() => import("./components/pages/Admin/Admin"));
  const AddServiceLazy = useLazy(() => import("./components/pages/AddService/AddService"));
  const AddProjectLazy = useLazy(() => import("./components/pages/AddProject/AddProject"));

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
      element: (
        <Layout>
          <ServicesContainerLazy/>
        </Layout>
      )
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/add-service",
          element: (
            <Layout>
              <AddServiceLazy />
            </Layout>
          ),
        },
        {
          path: "/add-project",
          element: <AddProjectLazy />,
        },
        {
          path: "*",
          element: <div>This page does not exist</div>,
        },
      ]
    },
    {
      path: "/projects",
      element: <ProjectsLazy/>,
    },
    {
      path: "/admin",
      element: <AdminLazy/>,
    },
    {
      path: "*",
      element: <div>This page does not exist</div>,
    },
  ]);

  useWebpSupportAndSet();
  useGetAllServices();
  useCheckAuth();

  return (
    <RouterProvider router={router} />
  );
};

export default AppRoutes;

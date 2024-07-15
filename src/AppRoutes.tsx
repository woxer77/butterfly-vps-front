import React from 'react';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoute from "./components/elements/ProtectedRoute/ProtectedRoute";
import Layout from "./components/elements/Layout/Layout";

import useLazy from "./hooks/common/useLazy";
import { useWebpSupportAndSet } from "./hooks/AppRoutes/useWebpSupportAndSet";
import { useGetAllServices } from "./hooks/AppRoutes/useGetAllServices";
import { useCheckAuth } from "./hooks/AppRoutes/useCheckAuth";

const AppRoutes: React.FC = () => {
  const HomeContainerLazy = useLazy(() => import("./containers/pages/HomeContainer"));
  const AboutContainerLazy = useLazy(() => import("./containers/pages/AboutContainer"));
  const EquipmentContainerLazy = useLazy(() => import("./containers/pages/EquipmentContainer"));
  const ServicesContainerLazy = useLazy(() => import("./containers/pages/ServicesContainer"));
  const ProjectsContainerLazy = useLazy(() => import("./containers/pages/ProjectsContainer"));
  const AdminLazy = useLazy(() => import("./components/pages/Admin/Admin"));
  const AddServiceContainerLazy = useLazy(() => import("./containers/pages/AddServiceContainer"));
  const AddProjectContainerLazy = useLazy(() => import("./containers/pages/AddProjectContainer"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeContainerLazy/>,
    },
    {
      path: "/about",
      element: <AboutContainerLazy/>,
    },
    {
      path: "/equipment",
      element: <EquipmentContainerLazy/>,
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
              <AddServiceContainerLazy />
            </Layout>
          ),
        },
        {
          path: "/add-project",
          element: <AddProjectContainerLazy />,
        },
        {
          path: "*",
          element: <div>This page does not exist</div>,
        },
      ]
    },
    {
      path: "/projects",
      element: <ProjectsContainerLazy/>,
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

import { Outlet, Navigate } from "react-router-dom";

import { useAppSelector } from "../../../hooks/common/redux";

const ProtectedRoute = () => {
  const isAuth = useAppSelector(state => state.adminReducer.isAuth);
  const loading = useAppSelector(state => state.adminReducer.loading);

  return ((isAuth && !loading) ? <Outlet /> : <Navigate to='/' />);
};

export default ProtectedRoute;

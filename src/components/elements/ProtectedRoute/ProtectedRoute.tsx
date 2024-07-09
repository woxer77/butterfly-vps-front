import { Outlet, Navigate } from "react-router-dom";

import { useAppSelector } from "../../../hooks/common/redux";

const ProtectedRoute = () => {
  const isAuth = useAppSelector(state => state.adminReducer.isAuth);

  return (isAuth ? <Outlet /> : <Navigate to='/' />);
};

export default ProtectedRoute;

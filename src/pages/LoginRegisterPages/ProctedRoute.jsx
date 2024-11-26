// create a file (e.g privateRoute.js) write this code

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: localStorage.getItem("tokenId") };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/Register" />;
};

export default ProtectedRoutes;

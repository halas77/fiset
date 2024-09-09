import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MainContext } from "../context/MainContext";

const PrivateRoute = () => {
  const context = useContext(MainContext);

  console.log("context", context);

  return context?.account !== "" ? (
    <Outlet />
  ) : (
    <Navigate to="/connect-wallet" replace />
  );
};

export default PrivateRoute;

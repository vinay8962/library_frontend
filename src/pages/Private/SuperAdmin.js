import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function SuperAdmin() {
  const { role } = useSelector((state) => state.login);

  return role === 101 ? <Outlet /> : <Navigate to="/login" />;
}

export default SuperAdmin;

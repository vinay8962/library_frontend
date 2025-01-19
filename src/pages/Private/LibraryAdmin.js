import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function LibraryAdmin() {
  const { role } = useSelector((state) => state.login);

  return role === 102 ? <Outlet /> : <Navigate to="/login" />;
}

export default LibraryAdmin;

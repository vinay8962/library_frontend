import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function Students() {
  const { role } = useSelector((state) => state.login);

  return role === 103 ? <Outlet /> : <Navigate to="/login" />;
}

export default Students;

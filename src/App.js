import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"; // ✅ Import Provider
import { ToastContainer } from "react-toastify";

import store from "./redux/store";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Index"; // Make sure Dashboard contains <Outlet />
import CreateLibrary from "./pages/Library Admin/CreateLibrary";
import LibraryBooking from "./pages/Students/LibraryBooking";
import Home from "./pages/Home";
import Students from "./pages/Private/Students";
import LibraryAdmin from "./pages/Private/LibraryAdmin";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Nested Routes under Dashboard */}
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} /> {/* Default child route */}
            <Route element={<LibraryAdmin />}>
              <Route path="createlibrary" element={<CreateLibrary />} />
            </Route>
            <Route element={<Students />}>
              <Route path="bookinglibrary" element={<LibraryBooking />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

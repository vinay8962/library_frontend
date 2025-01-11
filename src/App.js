import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"; // ✅ Import Provider
import { ToastContainer } from "react-toastify";

import store from "./redux/store";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Index";
import CreateLibrary from "./pages/Library Admin/CreateLibrary";
import LibraryBooking from "./pages/Students/LibraryBooking";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard as a Layout Wrapper */}
          <Route path="/" element={<Dashboard />}>
            <Route path="createlibrary" element={<CreateLibrary />} />
            <Route path="bookinglibrary" element={<LibraryBooking />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

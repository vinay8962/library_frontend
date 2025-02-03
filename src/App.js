import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"; // ✅ Import Provider
import { ToastContainer } from "react-toastify";

import { store, persistor } from "./redux/store";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Index"; // Make sure Dashboard contains <Outlet />
import CreateLibrary from "./pages/Library Admin/CreateLibrary";
import LibraryBooking from "./pages/Students/LibraryBooking";
import Home from "./pages/Home";
import Students from "./pages/Private/Students";
import LibraryAdmin from "./pages/Private/LibraryAdmin";
import { PersistGate } from "redux-persist/integration/react";
import Seat from "./pages/Students/Seat";
import CreateStudents from "./pages/Library Admin/CreateStudents";
import LibraryDetails from "./pages/Library Admin/LibraryDetails";
import AnimatedCursor from "react-animated-cursor";
import HorizontalLinearStepper from "./components/Stepper";
import StudentHomePage from "./pages/Students/StudentHomePage";
import Library from "./pages/Library Admin/Library";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AnimatedCursor
            innerSize={8}
            outerSize={12}
            color="193, 11, 111"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
          <ToastContainer />
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Nested Routes under Dashboard */}
            <Route path="/" element={<Dashboard />}>
              <Route index element={<Home />} /> {/* Default child route */}
              <Route element={<LibraryAdmin />}>
                <Route path="/stepper" element={<HorizontalLinearStepper />} />
                <Route path="createlibrary" element={<CreateLibrary />} />
                <Route path="/seats" element={<Seat />} />
                <Route path="/createStudents" element={<CreateStudents />} />
                <Route path="/library" element={<Library />} />
                <Route
                  path="/libraryDetails/:id"
                  element={<LibraryDetails />}
                />
              </Route>
              <Route element={<Students />}>
                <Route path="/student-home" element={<StudentHomePage />} />
                <Route path="/bookinglibrary" element={<LibraryBooking />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;

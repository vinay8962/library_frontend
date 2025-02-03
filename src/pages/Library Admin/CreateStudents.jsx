import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import { fetchRolesRequest } from "../../redux/reducers/Role";
import { useDispatch, useSelector } from "react-redux";
import { registerUserRequest } from "../../redux/reducers/Register";
import { toast } from "react-toastify";
import LibraryPlanCard from "../../components/LibraryPlanCard";
import { getLibraryRequest } from "../../redux/reducers/GetLibrary";
import { libraryPlanRequest } from "../../redux/reducers/LibraryPlan";
import StudentDetailsForm from "../../components/StudentDetailsForm";
import LibrarySelection from "../../components/LibrarySelection";
import { motion } from "framer-motion";

const steps = ["Enter Student Details", "Select Library Plan"];

export default function CreateStudentsWithStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});
  const [selectedLibrary, setSelectedLibrary] = useState("");
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  const dispatch = useDispatch();
  const { roles } = useSelector((state) => state.roles);
  const { library } = useSelector((state) => state.getLibrary);
  const { token, userId } = useSelector((state) => state.login);
  const { libraryPlan } = useSelector((state) => state.libraryPlan);

  useEffect(() => {
    if (userId && token) dispatch(getLibraryRequest({ userId, token }));
  }, [dispatch, userId, token]);

  useEffect(() => {
    dispatch(fetchRolesRequest());
  }, [dispatch]);

  // useCallback for handling library selection click to avoid unnecessary re-creations
  const handleLibraryClick = useCallback(
    (libraryId) => {
      setSelectedLibrary(libraryId);
      dispatch(libraryPlanRequest({ id: libraryId }));
    },
    [dispatch]
  );

  const handleLibraryPlanId = useCallback((id) => {
    setSelectedPlanId(id);
    console.log(`Library Plan Id: ${id}`);
    alert(`Library Plan Id: ${id}`);
  }, []);

  // useMemo for validating form errors to prevent unnecessary recalculation
  const validationErrors = useMemo(() => {
    const errors = {};
    if (!userName.trim()) errors.userName = "Name is required.";
    if (!email.trim()) errors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Invalid email format.";
    if (!password.trim()) errors.password = "Password is required.";
    if (password.length < 6)
      errors.password = "Password must be at least 6 characters.";
    if (!mobile.trim()) errors.mobile = "Mobile number is required.";
    if (!/^\d{10}$/.test(mobile))
      errors.mobile = "Mobile number must be 10 digits.";
    if (!address.trim()) errors.address = "Address is required.";
    return errors;
  }, [userName, email, password, mobile, address]);

  const handleNext = () => {
    if (activeStep === 0 && Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setUserName("");
    setEmail("");
    setPassword("");
    setMobile("");
    setAddress("");
    setSelectedLibrary("");
    setErrors({});
  };

  const handleSubmit = () => {
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const userData = {
      name: userName,
      email,
      password,
      roleId: roles[2].id,
      mobile,
      address,
      libraryId: selectedLibrary,
      libraryPlanId: selectedPlanId,
    };
    console.log(userData);
    dispatch(registerUserRequest(userData));
    toast.success("User registration request submitted.");
    handleReset();
  };

  return (
    <div className="flex justify-center">
      <Box sx={{ width: "80%" }} className="bg-thirdPrimary p-7 rounded-xl">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <>
            {activeStep === 0 ? (
              <StudentDetailsForm
                userName={userName}
                setUserName={setUserName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                mobile={mobile}
                setMobile={setMobile}
                address={address}
                setAddress={setAddress}
                errors={errors}
              />
            ) : (
              <>
                <LibrarySelection
                  library={library}
                  handleLibraryClick={handleLibraryClick}
                  selectedLibrary={selectedLibrary}
                />
                <motion.div
                  className="flex gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.2,
                      },
                    },
                  }}
                >
                  {libraryPlan?.map((plan, index) => (
                    <motion.div
                      key={plan.id}
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{
                        type: "spring",
                        damping: 15,
                        stiffness: 100,
                        delay: index * 0.15,
                      }}
                    >
                      <LibraryPlanCard
                        plan={plan}
                        isSelected={selectedPlanId === plan.library_plan_id}
                        onClick={() =>
                          handleLibraryPlanId(plan.library_plan_id)
                        }
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {activeStep === steps.length - 1 ? (
                <Button onClick={handleSubmit}>Submit</Button>
              ) : (
                <Button onClick={handleNext}>Next</Button>
              )}
            </Box>
          </>
        )}
      </Box>
    </div>
  );
}

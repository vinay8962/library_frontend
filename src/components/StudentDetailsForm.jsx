import React, { useCallback, useMemo } from "react";

const StudentDetailsForm = ({
  userName,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
  mobile,
  setMobile,
  address,
  setAddress,
  errors,
}) => {
  // useCallback to memoize onChange handlers
  const handleUserNameChange = useCallback(
    (e) => {
      setUserName(e.target.value);
    },
    [setUserName]
  );

  const handleEmailChange = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );

  const handlePasswordChange = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  const handleMobileChange = useCallback(
    (e) => {
      setMobile(e.target.value);
    },
    [setMobile]
  );

  const handleAddressChange = useCallback(
    (e) => {
      setAddress(e.target.value);
    },
    [setAddress]
  );

  // useMemo to memoize error messages
  const userNameError = useMemo(() => errors.userName, [errors.userName]);
  const emailError = useMemo(() => errors.email, [errors.email]);
  const passwordError = useMemo(() => errors.password, [errors.password]);
  const mobileError = useMemo(() => errors.mobile, [errors.mobile]);
  const addressError = useMemo(() => errors.address, [errors.address]);

  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          value={userName}
          onChange={handleUserNameChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          placeholder="Enter name"
        />
        {userNameError && (
          <p className="text-red-500 text-sm mt-1">{userNameError}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          placeholder="Enter email"
        />
        {emailError && (
          <p className="text-red-500 text-sm mt-1">{emailError}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          placeholder="Enter password"
        />
        {passwordError && (
          <p className="text-red-500 text-sm mt-1">{passwordError}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Mobile</label>
        <input
          type="text"
          value={mobile}
          onChange={handleMobileChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          placeholder="Enter mobile number"
        />
        {mobileError && (
          <p className="text-red-500 text-sm mt-1">{mobileError}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Address</label>
        <textarea
          value={address}
          onChange={handleAddressChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          placeholder="Enter address"
          rows="3"
        />
        {addressError && (
          <p className="text-red-500 text-sm mt-1">{addressError}</p>
        )}
      </div>
    </form>
  );
};

export default StudentDetailsForm;

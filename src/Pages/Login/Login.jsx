import React from "react";
import { useSelector } from "react-redux";

const Login = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`my-20 text-center h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl font-semibold">This is login page</h1>
    </div>
  );
};

export default Login;

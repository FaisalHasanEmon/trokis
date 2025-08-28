import React, { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";

const useAuth = () => {
  const auth = useContext(AuthProvider);
  return auth;
};

export default useAuth;

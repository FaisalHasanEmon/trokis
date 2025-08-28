import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthProvider = createContext(null);

const AuthContext = () => {
  const [loading, setLoading] = useState(true);
  const user = true;
  const login = async (email, password) => {
    setLoading(false);
    console.log(email, password);
  };

  const value = {
    user,
    login,
    loading,
  };
  return (
    <AuthProvider.Provider value={value}>Auth Context</AuthProvider.Provider>
  );
};

export default AuthContext;

import { useContext } from "react";
import AuthContext from "./AuthContext"; // ✅ Import context

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth; // ✅ Default export

import { useEffect, useRef, useState } from "react";
import { refreshAccessTokenIfNeeded } from "../services/auth";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("accessToken")
  );
  const isRefreshing = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Initial isAuthenticated:", isAuthenticated);

    const token = localStorage.getItem("accessToken");
    if (!token) {
      console.log("No access token found.");
      setIsAuthenticated(false);
      return;
    }

    if (!isRefreshing.current) {
      console.log("Attempting to refresh access token...");
      isRefreshing.current = true;
      refreshAccessTokenIfNeeded({ navigate })
        .then(() => {
          console.log("Token refreshed successfully.");
          setIsAuthenticated(true);
        })
        .catch((err) => {
          console.error("Failed to refresh token:", err.message);
          setIsAuthenticated(false);
        })
        .finally(() => {
          isRefreshing.current = false;
          console.log("Refresh process completed.");
        });
    }
  }, [navigate, isAuthenticated]);

  return isAuthenticated;
};

export default useAuth;

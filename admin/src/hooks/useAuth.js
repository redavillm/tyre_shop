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
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    if (!isRefreshing.current) {
      isRefreshing.current = true;
      refreshAccessTokenIfNeeded({ navigate })
        .then(() => {
          setIsAuthenticated(true);
        })
        .catch((err) => {
          console.error("Failed to refresh token:", err.message);
          setIsAuthenticated(false);
        })
        .finally(() => {
          isRefreshing.current = false;
        });
    }
  }, [navigate, isAuthenticated]);

  return isAuthenticated;
};

export default useAuth;

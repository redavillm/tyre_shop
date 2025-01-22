const API_BASE_URL = "http://localhost:3001";

export const register = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
};

export const login = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const { token, refreshToken } = await response.json();
  localStorage.setItem("accessToken", token);
  document.cookie = `refreshToken=${refreshToken}; HttpOnly`;
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  document.cookie = "refreshToken=; HttpOnly; Max-Age=0";
};

export const refreshAccessTokenIfNeeded = async ({ navigate }) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1])); // Декодируем payload JWT
      const isExpired = Date.now() >= payload.exp * 1000;

      if (!isExpired) {
        return; // Токен еще действителен, не обновляем
      }
    } catch (error) {
      console.error("Invalid token format", error);
    }
  }

  // Если токена нет или он истек, обновляем
  await refreshAccessToken({ navigate });
};

const refreshAccessToken = async ({ navigate }) => {
  const response = await fetch(`${API_BASE_URL}/refresh-token`, {
    method: "POST",
    credentials: "include", // Обязательно указываем, чтобы cookies отправлялись с запросом
  });

  if (!response.ok) {
    if (window.location.pathname !== "/login") {
      logout();
      navigate("/login");
    }
    throw new Error("Failed to refresh access token");
  }

  const { token } = await response.json();
  localStorage.setItem("accessToken", token);
};

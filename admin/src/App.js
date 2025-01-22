import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import { Accumulators, Disks, Tyres } from "./pages";
import { Login } from "./pages/login/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Main>
              <Tyres />
            </Main>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/tyres"
        element={
          <ProtectedRoute>
            <Main>
              <Tyres />
            </Main>
          </ProtectedRoute>
        }
      />
      <Route
        path="/disks"
        element={
          <ProtectedRoute>
            <Main>
              <Disks />
            </Main>
          </ProtectedRoute>
        }
      />
      <Route
        path="/accumulators"
        element={
          <ProtectedRoute>
            <Main>
              <Accumulators />
            </Main>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;

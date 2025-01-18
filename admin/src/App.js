import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import { Accumulators, Disks, Tyres } from "./pages";

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Tyres />} />
        <Route path="/tyres" element={<Tyres />} />
        <Route path="/disks" element={<Disks />} />
        <Route path="/accumulators" element={<Accumulators />} />
      </Routes>
    </Main>
  );
}

export default App;

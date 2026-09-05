import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PesaTrackPage from "./pages/PesaTrackPage";
import NdotoniPage from "./pages/NdotoniPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pesatrack" element={<PesaTrackPage />} />
      <Route path="/ndotoni" element={<NdotoniPage />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router";
import ServicesPage from "./pages/service";
import Homepage from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
}

export default App;

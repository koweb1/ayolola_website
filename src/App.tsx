import { Routes, Route } from "react-router";
import ServicesPage from "./pages/service";
import Homepage from "./pages/home";
import BookingPage from "./pages/booking";
import ContactPage from "./pages/contact";
import HowItWorks from "./pages/howitworks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
    </Routes>
  );
}

export default App;
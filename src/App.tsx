import { Routes, Route, BrowserRouter } from "react-router-dom";
import Track from "./pages/Track";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Spage from "./pages/Spage";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/track" element={<Track />} />
      <Route path="/services" element={<Spage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;


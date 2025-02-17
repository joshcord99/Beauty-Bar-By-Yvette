import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Terms from "./pages/terms";
import Layout from "./components/layout";
import "./App.css";
import Specials from "./pages/specials";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="termsofservice" element={<Terms />} />
          <Route path="home" element={<Home />} />
          <Route path="specials" element={<Specials />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

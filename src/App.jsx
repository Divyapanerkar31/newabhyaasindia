import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import BlogAccordion from "./pages/Blog";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* <Hero/> */}
    <Routes>
       <Route path="/" element={<Hero />} />
      <Route path="/services" element={<Services/>}/>
      <Route path="/CaseStudies" element={<CaseStudies/>}/>
      <Route path="/Blog" element={<BlogAccordion/>}/>
    </Routes>
      
    </BrowserRouter>
  );
}
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./servicess/Services";
import CaseStudies from "./casestudies/CaseStudies";
import BlogAccordion from "./blog/Blog";
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
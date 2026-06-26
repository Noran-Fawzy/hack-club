import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Learn from "./components/Learn/learn";
import Projects from "./components/Projects/projects";
import Form from "./components/Form/form";
import Footer from "./components/Footer/footer";
import AboutPage from "./components/AboutPage";

import Analytics from "./Analytics";

function Home() {
  return (
    <>
       <Analytics />
      <Navbar />
      <Hero />
      <Learn />
      <Projects />
      <Form />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      
    </Routes>
  );
}

export default App;
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Learn from "./components/Learn/learn";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Form from "./components/Form/form";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Learn />
      <About />
      <Projects />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
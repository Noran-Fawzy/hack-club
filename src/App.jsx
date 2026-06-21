import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Learn from "./components/Learn/learn";
import Projects from "./components/Projects/projects";
import Form from "./components/Form/form";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Learn />
      <Projects />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
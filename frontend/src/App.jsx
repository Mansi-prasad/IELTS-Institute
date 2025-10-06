import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;

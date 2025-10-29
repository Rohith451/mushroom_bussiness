import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Header from "./components/Header";   
import AboutSection from "./components/AboutSection";
import ProductShowcase from "./components/ProductShowcase";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductShowcase />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};
export default App;


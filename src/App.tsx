import './App.scss';
import { Header } from './components/Header';
import Hero from './components/Hero/Hero';
import Steps from './components/Steps/Steps';
import Stats from './components/Stats/Stats';
import Features from './components/Features/Features';
import Expenses from './components/Expenses/Expenses';
import Testimonials from './components/Testimonials/Testimonials';
import ContactForm from './components/ContactForm/ContactForm';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Steps />
      <Stats />
      <Features />
      <Expenses />
      <Testimonials />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default App;

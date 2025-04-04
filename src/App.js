import Header from './components/Header';
import ServiceInfo from './components/ServiceInfo';
import DentCalculator from './components/DentCalculator';
import ContsctForm from './components/ContactFrom';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import HeaderUp from './components/HeaderUp';
import Footer from './components/Footer';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';





function App() {

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (

    
    <div>

    <HeaderUp />

    <Header />

    <ServiceInfo />

    <DentCalculator />

    <Testimonials />
  
    <ContsctForm />

    <ContactUs />
    
    <Footer />

    </div>


  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About Us/About';
// import Destination from './component/Destination/Destination';
import ContactForm from './component/Contact Us/ContactForm';
import Gallery from './component/Gallery/Gallery';
import BookNow from './component/BookNow/BookNow';
import Experiences from './component/Experiences/Experiences';
import TravelTips from './component/TravelTips/TravelTips';
import DestinationPage from './component/Destination/DestinationPage';

function App() {
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/about' element={<About />} />
        <Route path='/destination' element={<DestinationPage/>} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/Booking' element={<BookNow />} />
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/travel-tips' element={<TravelTips />} />



      </Routes>
   
    </div>
  );
}

export default App;

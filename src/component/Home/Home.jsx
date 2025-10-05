
// import Destination from '../Destination/Destination';
import DestinationPage from '../Destination/DestinationPage';
import Experiences from '../Experiences/Experiences';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import TravelTips from '../TravelTips/TravelTips';
import './Home.css'


const Home = () => {
  return (
    <div>
     <Header /> 
    < DestinationPage/>
    <Gallery/>
    <Experiences/>
    {/* <TravelTips/> */}
    <TravelTips/>
   
    </div>
  )
}

export default Home
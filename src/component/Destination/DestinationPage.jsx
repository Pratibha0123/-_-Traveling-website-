import Slider from "react-slick"; 
import "./Destination.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import destinationImg1 from "../../assets/images/destinations1.png";
import destinationImg2 from "../../assets/images/destinations2.png";
import destinationImg3 from "../../assets/images/destinations3.png";
import destinationImg4 from "../../assets/images/destinations4.png";
import destinationImg5 from "../../assets/images/destinations5.png";
import destinationImg6 from "../../assets/images/destinations6.png";
import destinationImg7 from "../../assets/images/destinations7.png";
import destinationImg8 from "../../assets/images/destinations8.png";
import destinationImg9 from "../../assets/images/destinations9.png";
import destinationImg10 from "../../assets/images/destinations10.png";
import destinationImg11 from "../../assets/images/destinations11.png";
import destinationImg12 from "../../assets/images/destinations5.jpeg";

const destinations = [
  { id: 1, img: destinationImg1, text: 'Cruising along the backwaters of Kerala is unforgettable.', link: 'https://www.keralatourism.org/' },
  { id: 2, img: destinationImg2, text: 'Visit the iconic Taj Mahal in Agra, a symbol of eternal love.', link: 'https://www.tourism-of-india.com/agra/taj-mahal.html' },
  { id: 3, img: destinationImg3, text: 'Explore the majestic Himalayas in Himachal and Uttarakhand.', link: 'https://himachaltourism.gov.in/' },
  { id: 4, img: destinationImg4, text: 'Discover Jaipur, the Pink City full of rich history and architecture.', link: 'https://tourism.rajasthan.gov.in/jaipur' },
  { id: 5, img: destinationImg5, text: 'Experience spiritual India at the ghats of Varanasi.', link: 'https://www.varanasitourism.in/' },
  { id: 6, img: destinationImg6, text: 'Marvel at the serene beauty of the tea gardens in Darjeeling.', link: 'https://www.wbtourismgov.in/darjeeling' },
  { id: 7, img: destinationImg7, text: 'Relax on the beaches of Goa with vibrant nightlife and heritage.', link: 'https://www.goatourism.gov.in/' },
  { id: 8, img: destinationImg8, text: 'Explore the backwaters of Alleppey on a traditional houseboat.', link: 'https://www.keralatourism.org/alleppey' },
  { id: 9, img: destinationImg9, text: 'Soak in the culture and cuisine of Hyderabad, the City of Pearls.', link: 'https://www.tourism-of-india.com/hyderabad/' },
  { id: 10, img: destinationImg10, text: 'Wander through the ruins of Hampi, a UNESCO World Heritage Site.', link: 'https://www.karnatakatourism.org/hampi' },
  { id: 11, img: destinationImg11, text: 'Admire colonial architecture and cafes of Pondicherry.', link: 'https://www.pondytourism.in/' },
  { id: 12, img: destinationImg12, text: 'Enjoy a tranquil stay in the valleys of Munnar.', link: 'https://www.keralatourism.org/munnar' }
];

const DestinationPage = () => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    }
  ]
};

  return (
    <div className="destination-slider-container">
      <h1 className="destination-heading">Top Indian Destinations</h1>
      <Slider {...settings}>
        {destinations.map(({ id, img, text, link }) => (
          <a 
            key={id} 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="destination-slide"
          >
            <div className="destination-card">
              <img src={img} alt={text} className="destination-image" />
              <p className="destination-text">{text}</p>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationPage;

// import Slider from 'react-slick'; 
// import './Destination.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import destinationImg1 from '../../assets/images/destinations1.png';
// import destinationImg2 from '../../assets/images/destinations2.png';
// import destinationImg3 from '../../assets/images/destinations3.png';
// import destinationImg4 from '../../assets/images/destinations4.png';
// import destinationImg5 from '../../assets/images/destinations5.png';
// import destinationImg6 from '../../assets/images/destinations6.png';
// import destinationImg7 from '../../assets/images/destinations7.png';
// import destinationImg8 from '../../assets/images/destinations8.png';
// import destinationImg9 from '../../assets/images/destinations9.png';
// import destinationImg10 from '../../assets/images/destinations10.png';
// import destinationImg11 from '../../assets/images/destinations11.png';
// import destinationImg12 from '../../assets/images/destinations5.jpeg';

// const destinations = [
//   { id: 1, img: destinationImg1, text: 'Cruising along the backwaters of Kerala is an unforgettable experience.' },
//   { id: 2, img: destinationImg2, text: 'Visit the iconic Taj Mahal in Agra, a symbol of eternal love.' },
//   { id: 3, img: destinationImg3, text: 'Explore the majestic Himalayas Himachal and Uttarakhand.' },
//   { id: 4, img: destinationImg4, text: 'Discover the rich history and architecture of the Pink City, Jaipur.' },
//   { id: 5, img: destinationImg5, text: 'Experience spiritual India at the ghats of Varanasi on the banks of the Ganges.' },
//   { id: 6, img: destinationImg6, text: 'Marvel at the serene beauty of the tea gardens in Darjeeling.' },
//   { id: 7, img: destinationImg7, text: 'Relax on the beaches of Goa, known for its vibrant nightlife and Portuguese heritage.' },
//   { id: 8, img: destinationImg8, text: 'Explore the backwaters of Alleppey on a traditional houseboat.' },
//   { id: 9, img: destinationImg9, text: 'Soak in the culture and cuisine of Hyderabad, the City of Pearls.' },
//   { id: 10, img: destinationImg10, text: 'Wander through the ruins of Hampi, a UNESCO World Heritage Site.' },
//   { id: 11, img: destinationImg11, text: 'Admire the colonial architecture and cafes of Pondicherry.' },
//   { id: 12, img: destinationImg12, text: 'Enjoy a tranquil stay in the valleys of Munnar.' }
// ];

// const Destination = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className="destination-slider-container">
//       <h1 className="destination-heading">Top Indian Destinations</h1>
//       <Slider {...settings}>
//         {destinations.map((item) => (
//           <div key={item.id} className="destination-slide">
//             <div className="destination-card">
//               <img
//                 src={item.img}
//                 alt="destination"
//                 className="destination-image"
//               />
//               <p className="destination-text">{item.text}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Destination;

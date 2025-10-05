import "./Experiences.css"; 
import "./Experiences.css";  

import img1 from "../../assets/experiences/img1.jpeg";
import img2 from "../../assets/experiences/img2.png";
import img3 from "../../assets/experiences/img3.jpeg";
import img4 from "../../assets/experiences/img4.jpeg";
import img5 from "../../assets/experiences/img5.jpeg";
import img6 from "../../assets/experiences/img6.jpeg";

const experiences = [
  {
    title: "Mountain Trekking",
    description: "Explore breathtaking trails in the Himalayas with scenic landscapes and thrilling adventures.",
    image: img1,
    link: "https://himachaltourism.gov.in/types/adventure/"
  },
  {
    title: "Beach Relaxation",
    description: "Unwind on the golden sands of Goa and enjoy the tropical vibes by the sea.",
    image: img2,
    link: "https://goatourism.gov.in/"
  },
  {
    title: "Cultural Tours",
    description: "Discover India’s rich heritage through historic temples, palaces, and cultural festivals.",
    image: img3,
    link: "https://www.incredibleindia.gov.in/content/incredible-india-v2/en/experiences.html"
  },
  {
    title: "Wildlife Safari",
    description: "Spot tigers, elephants, and exotic birds in India’s national parks and sanctuaries.",
    image: img4,
    link: "https://www.wildlifeinindia.com/"
  },
  {
    title: "Yoga & Wellness",
    description: "Rejuvenate your mind and body in Rishikesh and other wellness retreats.",
    image: img5,
    link: "https://www.uttarakhandtourism.gov.in/"
  },
  {
    title: "Desert Adventure",
    description: "Experience camel rides, sand dunes, and traditional Rajasthani culture in Thar Desert.",
    image: img6,
    link: "https://tourism.rajasthan.gov.in/"
  }
];


export default function Experiences() {
  return (
    <section className="experiences-section">
      <div className="experiences-container">
        <h2 className="experiences-title">Top Experiences in India</h2>
        <p className="experiences-subtitle">Handpicked journeys to make your trip unforgettable</p>
        
        <div className="experiences-grid">
          {experiences.map((exp, index) => (
            <a 
              href={exp.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={index} 
              className="experience-card"
            >
              <img src={exp.image} alt={exp.title} className="experience-image" />
              <div className="experience-content">
                <h3 className="experience-heading">{exp.title}</h3>
                <p className="experience-description">{exp.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

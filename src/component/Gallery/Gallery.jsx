import './Gallery.css';  
import gallery1 from '../../assets/images/gallery1.jpg'
import gallery2 from '../../assets/images/gallery2.jpeg'
import gallery3 from '../../assets/images/gallery3.jpeg'
import gallery4 from '../../assets/images/gallery4.jpeg'
import gallery5 from '../../assets/images/gallery5.jpeg'
import gallery6 from '../../assets/images/gallery6.jpg'
import gallery7 from '../../assets/images/gallery7.jpg'
import gallery8 from '../../assets/images/gallery8.jpg'
import gallery9 from '../../assets/images/gallery9.jpg'
import gallery10 from '../../assets/images/gallery10.jpg'
import gallery11 from '../../assets/images/gallery11.jpg'
import gallery12 from '../../assets/images/gallery12.jpg'



const images = [
  { id: 1, src:  gallery1, alt: 'Mountain Adventure', link: 'https://himachaltourism.gov.in/types/adventure/' },
  { id: 2, src: gallery2, alt: 'Goa Beaches', link: 'https://goatourism.gov.in/' },
  { id: 3, src: gallery3 , alt: 'Mumbai City', link: 'https://www.maharashtratourism.gov.in/' },
  { id: 4, src: gallery4, alt: 'Kaziranga National Park', link: 'https://assamtourism.gov.in/' },
  { id: 5, src: gallery5, alt: 'Thar Desert', link: 'https://tourism.rajasthan.gov.in/' },
  { id: 6, src: gallery6, alt: 'Andaman Islands', link: 'https://www.andamantourism.gov.in/' },
  { id: 7, src: gallery7, alt: 'Manali', link: 'https://himachaltourism.gov.in/' },
  { id: 8, src:gallery8, alt: 'Khajuraho Temples', link: 'https://www.mptourism.com/' },
  { id: 9, src:gallery9, alt: 'Chandni Chowk, Delhi', link: 'https://delhitourism.gov.in/' },
  { id: 10, src:gallery10, alt: 'Rishikesh River Rafting', link: 'https://uttarakhandtourism.gov.in/' },
  { id: 11, src:gallery11, alt: 'Jaipur Hot Air Balloon', link: 'https://tourism.rajasthan.gov.in/' },
  { id: 12, src: gallery12, alt: 'Spiti Valley Camping', link: 'https://himachaltourism.gov.in/' },
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Traveler’s Gallery</h2>
      <p className="gallery-subtitle">Moments Captured on the Journey</p>

      <div className="gallery-grid">
        {images.map(({ id, src, alt, link }) => (
          <a href={link} target="_blank" rel="noopener noreferrer" key={id}>
            <div className="gallery-card">
              <img src={src} alt={alt} className="gallery-img" />
              <div className="gallery-overlay">
                <p>{alt}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

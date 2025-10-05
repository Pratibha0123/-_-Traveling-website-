import './Gallery.css';  

const images = [
  { id: 1, src: '/src/assets/images/gallery1.jpg', alt: 'Mountain Adventure', link: 'https://himachaltourism.gov.in/types/adventure/' },
  { id: 2, src: '/src/assets/images/gallery2.jpeg', alt: 'Goa Beaches', link: 'https://goatourism.gov.in/' },
  { id: 3, src: '/src/assets/images/gallery3.jpeg', alt: 'Mumbai City', link: 'https://www.maharashtratourism.gov.in/' },
  { id: 4, src: '/src/assets/images/gallery4.jpeg', alt: 'Kaziranga National Park', link: 'https://assamtourism.gov.in/' },
  { id: 5, src: '/src/assets/images/gallery5.jpeg', alt: 'Thar Desert', link: 'https://tourism.rajasthan.gov.in/' },
  { id: 6, src: '/src/assets/images/gallery6.jpg', alt: 'Andaman Islands', link: 'https://www.andamantourism.gov.in/' },
  { id: 7, src: '/src/assets/images/gallery7.jpg', alt: 'Manali', link: 'https://himachaltourism.gov.in/' },
  { id: 8, src: '/src/assets/images/gallery8.jpg', alt: 'Khajuraho Temples', link: 'https://www.mptourism.com/' },
  { id: 9, src: '/src/assets/images/gallery9.jpg', alt: 'Chandni Chowk, Delhi', link: 'https://delhitourism.gov.in/' },
  { id: 10, src: '/src/assets/images/gallery10.jpg', alt: 'Rishikesh River Rafting', link: 'https://uttarakhandtourism.gov.in/' },
  { id: 11, src: '/src/assets/images/gallery11.jpg', alt: 'Jaipur Hot Air Balloon', link: 'https://tourism.rajasthan.gov.in/' },
  { id: 12, src: '/src/assets/images/gallery12.jpg', alt: 'Spiti Valley Camping', link: 'https://himachaltourism.gov.in/' },
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

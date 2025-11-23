import './TravelTips.css';

const TravelTips = () => {
  const tips = [
    {
      title: "Smart Tips for Happy Travelers",
      content: "Roll your clothes, pack light, and bring essentials only.",
      img: "https://img.icons8.com/color/48/000000/suitcase--v1.png"
    },
    {
      title: "Pack, Plan, Explore: Must-Know Travel Tips",
      content: "Always carry a reusable water bottle, especially in tropical regions.",
      img: "https://img.icons8.com/color/48/000000/water-bottle.png"
    },
    {
      title: "Respect Culture",
      content: "Learn basic phrases and be respectful to local traditions.",
      img: "https://img.icons8.com/color/48/000000/globe--v1.png"
    },
    {
      title: "Top Travel Tips for Your Next Adventure",
      content: "Prepare your itinerary but stay flexible to explore new things.",
      img: "https://img.icons8.com/color/48/000000/map.png"
    },
    {
      title: "Travel Tips to Make Memories, Not Mistakes",
      content: "Keep an open mind and embrace new experiences.",
      img: "https://img.icons8.com/color/48/000000/camera--v1.png"
    },
  ];

  return (
    <section className="travel-tips-container">
      <h2 className="travel-tips-heading">Top Travel Tips</h2>
      <div className="travel-tips-grid">
        {tips.map((tip, index) => (
          <div key={index} className="travel-tip-card">
            <img src={tip.img} alt={`${tip.title} icon`} className="travel-tip-icon" />
            <h3 className="travel-tip-title">{tip.title}</h3>
            <p className="travel-tip-content">{tip.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelTips;

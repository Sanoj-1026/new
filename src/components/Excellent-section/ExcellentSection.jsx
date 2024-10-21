import React from "react";
import "./ExcellentSection.css"; // Create a CSS file for the styles

// Data for excellence items
const excellenceItems = [
  {
    icon: "🌞", // Replace with your actual icon component/image
    title: "Sunshine",
    subtitle: "12+ years",
  },
  {
    icon: "💻",
    title: "Online Tuition",
    subtitle: "25+ Teachers \n 3,000+ Students",
  },
  {
    icon: "📊",
    title: "Skills Lab",
    subtitle: "25+ Schools \n 9,000 Students",
  },
  {
    icon: "🔢",
    title: "Olympiad",
    subtitle: "450+ Schools \n 100,000+ Students",
  },
  {
    icon: "🔬",
    title: "STEM Lab",
    subtitle: "13+ Schools \n 6,000+ Students",
  },
  {
    icon: "🤖",
    title: "Robotics",
    subtitle: "100+ Schools \n 50,000+ Students",
  },
];

const ExcellenceSection = () => {
  return (
    <div className="excellence-section">
      <h2>Our Excellence</h2>
      <hr className="title-underline" />
      <div className="excellence-items">
        {excellenceItems.map((item, index) => (
          <div key={index} className="excellence-item">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcellenceSection;

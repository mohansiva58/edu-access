import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import './Apps.css';
import newImage1 from "./road1.jpg";
import newImage2 from "./road2.jpg";
import newImage3 from "./road3.jpg";
import newImage4 from "./road4.jpg";
import newImage5 from "./road5.jpg";
import newImage6 from "./road6.jpg";
import newImage7 from "./road7.jpg";
import newImage8 from "./road8.jpg";
import newImage9 from "./road9.jpg";

const roadmaps = [
  {
    id: 1,
    title: "Frontend",
    thumbnail: "https://roadmap.sh/roadmaps/frontend.png",
    description: "Complete roadmap to become a frontend developer, covering HTML, CSS, JavaScript, React, and more.",
    requirements: [
      "Basic understanding of web technologies",
      "Dedication to learn 4-5 hours daily",
      "Computer with stable internet connection"
    ]
  },
  {
    id: 2,
    title: "Backend",
    thumbnail: "https://roadmap.sh/roadmaps/backend.png",
    description: "Complete roadmap to become a backend developer, covering Node.js, Databases, APIs, and more...",
    requirements: [
      "Understanding of server-side programming (Node.js, Python, Java, etc.)",
      "Knowledge of databases (SQL, NoSQL) and API development",
      "Familiarity with authentication, security, and deployment techniques."
    ]
  },
  {
    id: 3,
    title: "Data Science",
    thumbnail: "https://dotnettrickscloud.blob.core.windows.net/article/data%20science/4620240209150019.png",
    description: "Comprehensive data science roadmap covering Python, Statistics, Machine Learning, and Deep Learning.",
    requirements: [
      "Strong foundation in Python programming",
      "Understanding of statistics and mathematics",
      "Basic knowledge of machine learning concepts."
    ]
  },
  {
    id: 4,
    title: "Full stack",
    thumbnail: "https://www.theinsaneapp.com/wp-content/uploads/2020/11/full-stack-developer-roadmap-scaled.jpg",
    description: "A complete roadmap to becoming a Full Stack Developer, covering frontend, backend, databases, and deployment.",
    requirements: [
      "Proficiency in both frontend (HTML, CSS, JavaScript) and backend (Node.js, Python, etc.)",
      "Understanding of databases (SQL, MongoDB) and RESTful APIs",
      "Ability to deploy and manage applications using cloud platforms or DevOps tools."
    ]
  },
  {
    id: 5,
    title: "Python",
    thumbnail: "https://github.com/ErdemOzgen/Python-developer-roadmap/raw/main/python-developer-roadmap.png",
    description: "Python is a high-level, interpreted programming language known for its simplicity and readability, widely used in web development, automation, data science, and AI.",
    requirements: [
      "Interpreter : Install Python 3 from python.org.",
      "Package Manager : pip (included with Python 3) for installing libraries.",
      "IDE/Text Editor : Use VS Code, PyCharm, or Jupyter Notebook for development."
    ]
  },
  {
    id: 6,
    title: "Java",
    thumbnail: "https://github.com/devoxx/JavaRoadmap2022/raw/main/JavaRoadmap2024.jpg",
    description: "Java is a versatile, object-oriented programming language known for its portability, security, and wide use in web, mobile, and enterprise applications.",
    requirements: [
      "JDK(Java Development Kit) : Install the latest JDK from Oracle or OpenJDK.",
      "IDE/Text Editor :Use IntelliJ IDEA, Eclipse, or VS Code for development.",
      "Java Runtime Environment (JRE) : Required to run Java applications."
    ]
  },
  {
    id: 7,
    title: "UI/UX design",
    thumbnail: "https://camo.githubusercontent.com/4f8a6a69da634fa54af7abc24a9a2191c91ac7a3be9828ae2703c3b2bb534e9d/687474703a2f2f692e696d6775722e636f6d2f6e476742315a462e706e67",
    description: "One-line description: UX design focuses on creating seamless, intuitive, and user-friendly experiences for digital products.",
    requirements: [
      "User Research  Understanding user needs, behaviors, and pain points.",
      "Usability & Accessibility  Ensuring the product is easy to use and inclusive for all users.",
      "Iterative Testing Continuously refining the design based on user feedback and testing."
    ]
  },
  {
    id: 8,
    title: "Blockchain",
    thumbnail: "https://i.pinimg.com/originals/e5/05/dd/e505dd9163d364d98bea1ce425edbd51.jpg",
    description: "Blockchain is a decentralized, secure, and transparent digital ledger used for recording transactions across a distributed network.",
    requirements: [
      "Decentralization  No single entity controls the network, ensuring trust and transparency.",
      "Security & Encryption : Uses cryptographic techniques to protect data integrity and prevent tampering.",
      "Consensus Mechanism : A protocol like Proof of Work (PoW) or Proof of Stake (PoS) to validate transactions."
    ]
  },
  {
    id: 9,
    title: "Cyber security",
    thumbnail: "https://github.com/thatstraw/Cybersecurity-Roadmap/raw/main/maps/cybersecurity-roadmap-1-v1.png",
    description: "Cybersecurity involves protecting systems, networks, and data from cyber threats, attacks, and unauthorized access.",
    requirements: [
      "Strong Authentication & Access Control : Implementing multi-factor authentication and role-based access.",
      "Regular Security Updates & Patching : Keeping software and systems up to date to prevent vulnerabilities.",
      "Data Encryption & Backup : Protecting sensitive information and ensuring recovery in case of breaches."
    ]
  }
];

function Apps() {
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);

  const getImage = (title) => {
    switch (title) {
      case "Frontend": return newImage1;
      case "Backend": return newImage2;
      case "Data Science": return newImage3;
      case "Full stack": return newImage4;
      case "Python": return newImage5;
      case "Java": return newImage6;
      case "UI/UX design": return newImage7;
      case "Blockchain": return newImage8;
      case "Cyber security": return newImage9;
      default: return null; // Fallback to roadmap.thumbnail if no local image
    }
  };

  const RoadmapCard = ({ roadmap }) => (
    <div className="roadmap-card" onClick={() => setSelectedRoadmap(roadmap)}>
      <img
        src={getImage(roadmap.title) || roadmap.thumbnail}
        alt={roadmap.title}
        className="thumbnail"
      />
      <div className="card-content">
        <h2 className="title">{roadmap.title}</h2>
        <button className="view-details">View details <ChevronRight size={16} /></button>
      </div>
    </div>
  );

  const RoadmapDetails = ({ roadmap, onClose }) => (
    <div className="roadmap-details">
      <button className="close-button" onClick={onClose}>×</button>

      {/* Imported image displayed before the title */}
      <img
        src={getImage(roadmap.title) || roadmap.thumbnail}
        alt={roadmap.title}
        className="roadmap-image1 "
      />

      <h2>{roadmap.title}</h2>
      <p>{roadmap.description}</p>
      <h3>Requirements</h3>
      <ul>
        {roadmap.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>

      {/* Roadmap image after requirements */}
      <img
        src={roadmap.thumbnail}
        alt={roadmap.title}
        className="roadmap-image"
      />
    </div>
  );

  return (
    <div className="app">
      <header>
        <h1>Learning Roadmaps</h1>
      </header>
      <main>
        {selectedRoadmap ? (
          <RoadmapDetails
            roadmap={selectedRoadmap}
            onClose={() => setSelectedRoadmap(null)}
          />
        ) : (
          <div className="roadmap-grid">
            {roadmaps.map(roadmap => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Apps;
import React from "react";
import './App.css';
import ProfileCard from "./Profilecard";

const App = () => {
  const userOne = {
    imageSrc: "https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png",
    designation: "Former Captain, Indian Cricket Team",
    name: "Virat Kohli",
    jobDescription: "One of the Best batsmen in the world.",
  };

  const userTwo = {
    imageSrc: "https://s.ndtvimg.com/images/entities/300/ms-dhoni-700.png",
    designation: "Former Captain, Indian Cricket Team",
    name: "MS Dhoni",
    jobDescription: "Greatest wicket-keeper batsmen.",
  };

  const userThree = {
    imageSrc: "https://s.ndtvimg.com/images/entities/300/rohit-sharma-857.png",
    designation: "Captain, Indian Cricket Team",
    name: "Rohit Sharma",
    jobDescription: "one of the Best opening batsmen in the world.",
  };
  
  const handleSeeMore = (name) => {
    alert(name);
  };
  
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <div style={{ backgroundColor: "#5b2c8c", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
    <ProfileCard
      imageSrc={userOne.imageSrc}
      designation={userOne.designation}
      name={userOne.name}
      jobDescription={userOne.jobDescription}
      onSeeMore={() => handleSeeMore(userOne.name)}
    />
  </div>
  <div style={{ backgroundColor: "#5b2c8c", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
    <ProfileCard
      imageSrc={userTwo.imageSrc}
      designation={userTwo.designation}
      name={userTwo.name}
      jobDescription={userTwo.jobDescription}
      onSeeMore={() => handleSeeMore(userTwo.name)}
    />
  </div>
  <div style={{ backgroundColor: "#5b2c8c", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
    <ProfileCard
      imageSrc={userThree.imageSrc}
      designation={userThree.designation}
      name={userThree.name}
      jobDescription={userThree.jobDescription}
      onSeeMore={() => handleSeeMore(userThree.name)}
    />
  </div>
</div>
  );
};

export default App;

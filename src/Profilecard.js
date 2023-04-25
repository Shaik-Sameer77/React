import React from "react";

function ProfileCard(props) {
    const { imageSrc, designation, name, jobDescription, onSeeMore } = props;
    
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#4b0082", color: "#fff", width: "300px", height: "400px", borderRadius: "10px", padding: "20px" }}>
        <img src={imageSrc} alt="Profile" style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "20px" }} />
        <h3 style={{ marginBottom: "10px" }}>{designation}</h3>
        <h2 style={{ marginBottom: "10px" }}>{name}</h2>
        <p style={{ marginBottom: "20px" }}>{jobDescription}</p>
        <button onClick={onSeeMore} style={{ backgroundColor: "#fff", color: "#5b2c8c", padding: "10px 20px", borderRadius: "5px", border: "none" }}>See More</button>
      </div>
    );
  }
  
  
  

export default ProfileCard;



import React from "react";
import "../assets/styles/css/us.css";
import { FaUserAlt, FaGraduationCap, FaPhoneAlt, FaFacebook, FaGithub } from "react-icons/fa";

const Us = () => {
  const team = [
    {
      name: "Nguyễn Công Minh Tuấn",
      age: 20,
      education: "FPT University",
      phone: "+123456789",
      facebook: "https://facebook.com/johndoe",
      github: "https://github.com/johndoe",
      quote: "Code is like humor. When you have to explain it, it’s bad.",
    },
    {
      name: "Đặng Quang Huy",
      age: 20,
      education: "FPT University",
      phone: "+987654321",
      facebook: "https://facebook.com/janesmith",
      github: "https://github.com/janesmith",
      quote: "Data is the new oil.",
    },
    {
      name: "Nguyễn Hữu Phúc",
      age: 20,
      education: "FPT University",
      phone: "+192837465",
      facebook: "https://facebook.com/alexbrown",
      github: "https://github.com/alexbrown",
      quote: "Keep it simple, but significant.",
    },
  ];

  return (
    <div className="us-container">
      <h2 className="text-center mb-4">Meet The Knights</h2>
      <div className="team-cards">
        {team.map((member, index) => (
          <div className="card" key={index}>
            <div className="image-placeholder">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Faker_2020_interview.jpg" alt="Profile" />
            </div>
            <div className="info">
              <h5>
                <FaUserAlt className="icon" /> {member.name}
              </h5>
              <p>
                <FaGraduationCap className="icon" /> {member.education}
              </p>
              <p>
                <FaPhoneAlt className="icon" /> {member.phone}
              </p>
              <p>
                <FaFacebook className="icon" />{" "}
                <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </p>
              <p>
                <FaGithub className="icon" />{" "}
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </p>
              <blockquote className="quote">
                <em>&quot;{member.quote}&quot;</em>
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Us;

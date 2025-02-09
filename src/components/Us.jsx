import "../assets/styles/css/us.css";
import { FaUserAlt, FaGraduationCap, FaPhoneAlt, FaFacebook, FaGithub, FaBriefcase } from "react-icons/fa";

const Us = () => {
  const team = [
    {
      name: "Nguyễn Công Minh Tuấn",
      age: 20,
      education: "FPT University",
      job: "System Admin",
      phone: "+84 354 031 289",
      facebook: "https://www.facebook.com/congminhtuan.nguyen",
      github: "https://github.com/OrlandoNguyen",
      quote: "Code is like humor. When you have to explain it, it's bad.",
      avatar: "/images/Tuan.jpg"
    },
    {
      name: "Đặng Quang Huy",
      age: 20,
      education: "FPT University",
      job: "RPA Developer",
      phone: "+84 943 241 038",
      facebook: "https://www.facebook.com/h.ngquang/",
      github: "https://github.com/HyuDeQueue",
      quote: "One leetcode a day keep the unemployment away.",
      avatar: "/images/Huy.jpg"
    },
    {
      name: "Nguyễn Hữu Phúc",
      age: 20,
      education: "FPT University",
      job: "Fullstack Developer",
      phone: "+84 928 374 465",
      facebook: "https://www.facebook.com/nonobeam",
      github: "https://github.com/Nonobeam",
      quote: "Keep it simple, but significant.",
      avatar: "/images/Phuc.jpg"
    },
  ];

  return (
    <div className="us-container">
      <h2 className="text-center mb-4 knightTextStyle">Meet The Knights</h2>
      <div className="team-cards">
        {team.map((member, index) => (
          <div className="card" key={index}>
            <div className="image-placeholder">
              <img src={member.avatar} alt="Profile" />
            </div>
            <div className="info">
              <h5>
                <FaUserAlt className="icon" /> {member.name}
              </h5>
              <p>
                <FaGraduationCap className="icon" /> {member.education}
              </p>
              <p>
                <FaBriefcase className="icon" /> {member.job}
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

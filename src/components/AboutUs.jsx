import "../assets/styles/css/aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">About Us</h2>
      <div className="about-us-content">
        <div className="about-us-text">
          <p>
            We are a passionate team of developers committed to delivering high-quality, innovative solutions to the world.
            Our expertise spans across various fields, including web development, data science, and software engineering.
            Our goal is to create products that solve real-world problems and make a positive impact on the community.
          </p>
        </div>
        <div className="about-us-image">
          <img src="/images/3musketeers.png" alt="Team" className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

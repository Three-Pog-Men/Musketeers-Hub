import React from 'react';
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';  
import Card from './card';
import "../assets/styles/css/projects.css"

const Projects = () => {
  const projects = [
    {
      projectName: "Grafana",
      projectDescription: "Manage the physical server and running containers",
      imageSrc: "https://grafana.com/media/grafana/images/grafana-dashboard-english.png",
      link: "http://monitor.threemusketeer.click"
    },
    {
      projectName: "Dashdot",
      projectDescription: "Simply viewing server resource usage",
      imageSrc: "https://getdashdot.com/img/screenshot_darkmode.png",
      link: "http://pog.threemusketeer.click:3001"
    },
    {
      projectName: "Roomify",
      projectDescription: "Virtual, Interactive Conference Room",
      imageSrc: "https://www.ismartkids.vn/uploads/images/cute-la-gi-cach-de-tro-thanh-mot-co-gai-cute-2.jpeg",
      link: "https://pog.threemusketeer.click"
    },
  ];

  const carouselItems = projects.map((project, index) => (
    <Card
      key={index}
      projectName={project.projectName}
      projectDescription={project.projectDescription}
      imageSrc={project.imageSrc}
      link={project.link}
    />
  ));

  return (
    <div className="projects">
      <h1 id='projectHeader'>Projects</h1>
      <Carousel
        items={carouselItems}
        startIndex={0}
        onChange={(currentIndex) => console.log(currentIndex)}
        perspective={1}
        perspectiveOrigin='center'
        autoPlay={true} 
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        focusOnSelect={true}
      />
    </div>
  );
};

export default Projects;

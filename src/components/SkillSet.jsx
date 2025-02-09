import React from 'react';
import {
  faPython,
  faJava,
  faUbuntu,
  faGitAlt,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faAws,
} from '@fortawesome/free-brands-svg-icons';
import { faServer, faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../assets/styles/css/skill.css';

const skillRows = [
  [
    { name: 'Java', icon: faJava },
    { name: 'Python', icon: faPython },
    { name: 'Ubuntu', icon: faUbuntu },
    { name: 'Git', icon: faGitAlt },
  ],
  [
    { name: 'HTML & CSS', icon: faHtml5 },
    { name: 'JavaScript', icon: faJs },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'React', icon: faReact },
  ],
  [
    { name: 'AWS', icon: faAws },
    { name: 'Server', icon: faServer },
    { name: 'Cloud', icon: faCloud },
  ],
];

const SkillSet = () => {
  return (
    <div className="portfolio-container">
      <section className="myskills">
        <h2>My Skills</h2>
        <div className="skills-wrapper">
          {skillRows.map((row, rowIndex) => (
            <div key={rowIndex} className="skills-row">
              {row.map(({ name, icon }) => (
                <div key={name} className="skill-card">
                  <FontAwesomeIcon icon={icon} size="3x" />
                  <p>{name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillSet;
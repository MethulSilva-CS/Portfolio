import './Skills.css';
import frontend from '../../assets/frontend.png';
import backend from '../../assets/backend.png';
import code from '../../assets/code.png';
import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

function Skills() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });
  }, []);

  return (
    <div className='skills'>
      <div className='skills-topic'>
        <h1>Skills</h1>
        <h2>Technologies I Work With</h2>
      </div>

      <div className='skills-cards'>
        <div className='card'>
          <img className='icon' src={frontend} alt='frontend' />
          <h2>Frontend Development</h2>
          <p>React</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
        </div>

        <div className='card'>
          <img className='icon' src={backend} alt='backend' />
          <h2>Backend Development</h2>
          <p>Spring Boot</p>
          <p>Node.js</p>
          <p>Firebase</p>
          <p>MySQL</p>
          <p>MongoDB</p>
        </div>

        <div className='card'>
          <img className='icon' src={code} alt='code' />
          <h2>Programming Languages</h2>
          <p>Python</p>
          <p>Java</p>
          <p>SQL</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

import './Services.css';
import dev from '../../assets/dev.png';
import uiux from '../../assets/ui-ux.png'; 
import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
function Services(){
     useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".service-card"), {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.3,
        });
      }, []);
    return(
        <div className='services'>
            <div className='services-heading'>
                <h1>Services</h1>
                <h2>Solutions Crafted Through Code and Design</h2>
            </div>
            <div className='services-cards'>
                  <div className='service-card'>
                      <img className='serv-img' src={dev} alt="fullstack-development" />
                      <h2>Fullstack Development</h2>
                      <p>Building complete web applications from frontend to backend using modern technologies. I handle everything from user interfaces to databases and APIs.</p>
                  </div>
                  <div className='service-card'>
                      <img className='serv-img' src={uiux} alt="UI/UX Design" />
                      <h2>UI/UX Design</h2>
                      <p>Designing user-friendly and visually appealing interfaces with a focus on usability, accessibility, and responsive design.</p>
                       </div>
            </div>

        </div>
    );
}

export default Services
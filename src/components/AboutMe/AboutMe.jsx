import './AboutMe.css'
import mypic from '../../assets/AboutMe.jpeg'
function AboutMe(){
    return(
   <div className="about-me">
    <div className='info'>
       <h1>About Me</h1>
       <div className='img'>
      <img className='my-img' src={mypic} alt='my pic'></img>
       </div>
       <h2>The Person Behind the Code</h2>
       <div className='aboutme-card'>
       <p>I am a Passionate and dedicated Computer Science student at the Informatics Institute of Technology (IIT), with a strong interest in full-stack web development. I am currently seeking an internship opportunity where I can apply my technical knowledge, collaborate with professionals, and contribute to meaningful solutions. With a solid background in modern web technologies and a continuous drive to improve, I strive to grow both personally and professionally while delivering value through innovation and teamwork.</p>
       </div>
      </div>    
   </div>
    );
}

export default AboutMe
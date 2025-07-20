import './Education.css';
import location from '../../assets/location.png'
import date from '../../assets/date.png'
function Education(){
    return(
        <div className="education">
           <div className="edu-heading">
            <h1>Education</h1>
            <h2>The Journey of Learning and Growth</h2>
           </div>

           <div className='edu-cards'>
            <div className='edu-card'>
                <h2>BSc (Hons) Computer Science</h2>
                <p>University of Westminster UK  <img className='location' src={location} alt="location" /></p>
                <p>2023 - Present <img className='date' src={date} alt="date" /></p>
                <p>Currently pursuing a BSc (Hons) in Computer Science from the University of Westminster, UK. Focusing on software development, programming, and computing principles.</p>
            </div>

             <div className='edu-card'>
                <h2>Foundation Certificate in Higher Education - IT</h2>
                <p>Informatics Institute Of Technology , Colombo 03 <img className='location' src={location} alt="location" /></p>
                <p>2022 - 2023 <img className='date' src={date} alt="date" /></p>
                <p>Completed the Foundation Certificate in Higher Education with a Merit pass. Gained basic knowledge in computing to prepare for university studies.</p>
            </div>

            <div className='edu-card'>
                <h2>Ordinary Level</h2>
                <p>Carey College, Colombo 08  <img className='location' src={location} alt="location" /></p>
                <p>2011 - 2022 <img className='date' src={date} alt="date" /></p>
               <p>Successfully completed Ordinary Level education at Carey College, Colombo 08, achieving excellent results (8As and 1B), laying a strong academic foundation for further studies.</p>
            </div>

           

             

           </div>
        </div>
    );
}

export default Education
import './Projects.css';
import reactlogo from '../../assets/react.png';
import firebase from '../../assets/firebase.png';
import tmdb from '../../assets/tmdb.png';
import node from '../../assets/nodejs.png';
import mongodb from '../../assets/mongodb.png';
import polygon from '../../assets/polygon.png';
import solidity from '../../assets/solidity.png';
import python from '../../assets/python.png'
import api from '../../assets/api.png';
import java from '../../assets/java.png';
import github from '../../assets/github.png';
function Projects(){
    return(
        <div className='projects'>
         <div className='projects-heading'>
            <h1>Projects</h1>
            <h2>Turning Code into Real-World Solutions</h2>
         </div>
        <div className='projects-cards'>
            <div className='project-card'>
                    <h2>MSZONE 🎬</h2>
                    <p>MSZONE is a React-based movie streaming website using TMDb for live movie data and Firebase for secure auth and backend support, offering a smooth and responsive viewing experience across all devices.</p>
                    <img className='react-logo' src={reactlogo} alt="react logo" />
                    <img className='tmdb-logo'src={tmdb} alt="tmdb" />
                    <img className='firebase-logo'src={firebase} alt="firbase" />
                    <a href='https://github.com/MethulSilva-CS/MSZONE' className='but1'>View More <img className='logo'src={github} alt="github" /></a>
                 </div>
        
            <div className='project-card'>
                    <h2>CeyLand 🔐</h2>
                    <p>CeyLand website is a Secure blockchain system for tamper-proof land documents, smart contract transfers, NFT verification, KYC integration, and legal consultation services.</p>
                   <img className='react-logo' src={reactlogo} alt="react logo" />
                   <img className='logo'  src={node} alt="node logo" />
                    <img className='logo' src={mongodb} alt="mongodb logo" />
                    <img className='logo' src={polygon} alt="polygon logo" />
                    <img className='logo' src={solidity} alt="solidity logo" />
                    <a href='https://github.com/Hansalie/SDGP' className='but1'>View More <img className='logo'src={github} alt="github" /></a>
                </div>
                
            <div className='project-card'>
                    <h2>MS-Time Project ⏲️</h2>
                    <p>MS Time project is a Python-based application with real-time time retrieval, automated timezone detection, geolocation support, Tkinter UI, and robust error handling.</p>
                    <img className='logo' src={python} alt="python logo" />
                    <img className='logo' src={api} alt="api logo" />
                    <a href='https://github.com/MethulSilva-CS/world-clock' className='but1'>View More <img className='logo'src={github} alt="github" /></a>
                </div>

                
                <div className='project-card'>
                    <h2>Airline Seat Reservation System ✈️</h2>
                    <p>A Java-based application with real-time seat tracking, booking validation, and ticket management, built using OOP and file storage for efficient airline reservations.</p>
                    <img className='logo' src={java} alt="java logo" />
                    <a href='https://github.com/' className='but1'>View More <img className='logo'src={github} alt="github" /></a>
                    
                </div>
         </div>
        </div>
    );
}

export default Projects
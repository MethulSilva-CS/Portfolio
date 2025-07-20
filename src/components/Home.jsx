import './Home.css'
import pic from '../assets/main-img.jpeg'
function Home(){
   return(
    <div className='home'>
      <div className="heading">
       <h1>Hey I am, <br />Methul Methsilu Silva</h1>
        <p>
        {"BSc Computer Science Student & Passionate About Turning Ideas Into Code"
          .split("")
          .map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
              {char}
            </span>
          ))}
      </p>



     </div>

    <div className='home-card'>
        <img className='home-card-img' src={pic}></img>
    </div>
</div>
   
   );
}

export default Home
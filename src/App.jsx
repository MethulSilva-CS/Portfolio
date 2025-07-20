import Home from './components/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Test from './components/Test/Test';

function App() {
  return (
    <div>
       <div className="container"><Test/></div>
      <div className="container"><Home /></div>
      <div className="container"><AboutMe /></div>
      <div className="container"><Skills /></div>
      <div className="container"><Education /></div>
      <div className="container"><Services /></div>
      <div className="container"><Projects /></div>
      <div className="container"><ContactMe /></div>
      
    </div>
  );
}

export default App;

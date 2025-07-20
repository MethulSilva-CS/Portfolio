import { useEffect } from 'react';
import './Test.css';

function Test() {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'dark'); 
  }, []);

  const switchTheme = (e) => {
    if (e.target.checked) {
      document.body.setAttribute('data-theme', 'light');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  };

  return (
    <div className='wrapper'>
      <label className="switch">
        <input type="checkbox" onChange={switchTheme} />
        <span className='slider round'></span>
      </label>
    </div>
  );
}

export default Test;

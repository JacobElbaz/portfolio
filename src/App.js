import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './E84A2509.jpg';
import Image from 'react-bootstrap/Image'
import github from './github.svg'
import linkedin from './linkedin.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src={logo} alt="logo" rounded  width={100} height={100}/>
        <div className='Titles'>
          <div className='Up-titles'>
            <div className='Name'>
              <h1 className='small mb-0'>Jacob Elbaz</h1>
              <h2 className='small'>3rd year B.Sc Software engineering student</h2>
            </div>
            <div className='links'> 
              <a href="https://www.linkedin.com/in/jacob-elbaz/" target="_blank" className='text-decoration-none text-white'><img src={linkedin}/> jacob-elbaz</a>
              <a href="https://github.com/JacobElbaz" target="_blank" className='text-decoration-none text-white'><img src={github}/> JacobElbaz</a>
            </div>
          </div>
          <div className='Motivation'>
            Motivated and dedicated student who learns quikly and desires to expand his knowledge ans skills
          </div>
        </div>
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;

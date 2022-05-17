import { Link } from 'react-router-dom';
import './styles/sass/App.css'
import Navigation from './components/Navigation';

function App() {
  return (
      <div className="landing-page">
        <Navigation />
        <main className="wrapper">
          <div className="welcome-image"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <button className="btn-primary">Let's Get Started!</button>
        </main>
      </div>
  );
}

export default App;

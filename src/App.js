import { Routes, Route } from 'react-router-dom';
import './styles/sass/App.css'
import Landing from './components/Landing';
import UserQuestions from './components/UserQuestions';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/start" element={<UserQuestions />} />
        </Routes>
      </div>
  );
}

export default App;

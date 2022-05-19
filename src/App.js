import { Routes, Route } from 'react-router-dom';
import './styles/sass/App.css'
import Landing from './components/Landing';
import QuestionSetOne from './components/QuestionSetOne';
import QuestionSetTwo from './components/QuestionSetTwo';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/start" element={<QuestionSetOne />} />
          <Route path="/customize" element={<QuestionSetTwo />}/>
        </Routes>
      </div>
  );
}

export default App;

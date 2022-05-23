import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './styles/sass/App.css'
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import QuestionSetOne from './components/QuestionSetOne';
import QuestionSetTwo from './components/QuestionSetTwo';

function App() {
  const [userInput, setUserInput] = useState({
    userName: "",
    language: "",
    interest: "",
    resource: "",
    projectLength: "",
    projectType: "",
    projectName: ""
  });

  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/start" element={<QuestionSetOne userInput={userInput} setUserInput={setUserInput}/>} />
        </Routes>
      </div>
  );
}

export default App;

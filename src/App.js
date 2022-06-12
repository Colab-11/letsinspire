import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './styles/sass/App.css'
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import QuestionSetOne from './components/QuestionSetOne';

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
        <Navbar setUserInput={setUserInput}/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/customize" element={<QuestionSetOne userInput={userInput} setUserInput={setUserInput} />} />
        </Routes>
      </div>
  );
}

export default App;

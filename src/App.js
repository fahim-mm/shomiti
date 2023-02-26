
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome"
import Porichiti from './Porichiti';
import SignupForm from './Signup';

function App() {
  return (
    <div className="App">
   
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/porichiti" element={<Porichiti />} />
      <Route path="/signup" element={<SignupForm />} />
   
    </Routes>
  </div>
  );
}

export default App;

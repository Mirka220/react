import './App.css';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const changeName = (value) => {
    console.log(value);
    <alert value={value}></alert>
  }

  const changeAge = (value) => {
    console.log(value);
    <alert>{value}</alert>
  }
  return (
    <div className="App">
      <nav>
        <Link to="/class">Class Component</Link>
        <br/>
        <Link to="/function">Function Component</Link>
      </nav>
      
      <Routes>
        <Route path="/class" element={
        <ClassComponent change={changeAge}name="Vladislav" age="12"/>
        }/>
        <Route path="/function" element={
          <FunctionComponent change={changeName} name="Miroslav" age="17"/>
        }/>
      </Routes>
    </div>
  );
}

export default App;

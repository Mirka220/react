import './App.css';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';

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
      <FunctionComponent change={changeName} name="Miroslav" age="17"/>
      <ClassComponent change={changeAge}name="Vladislav" age="12"/>
    </div>
  );
}

export default App;

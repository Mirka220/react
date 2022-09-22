import './App.css';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div>
      <FunctionComponent name="Miroslav" age="17"/>
      <ClassComponent name="Vladislav" age="12"/>
    </div>
  );
}

export default App;

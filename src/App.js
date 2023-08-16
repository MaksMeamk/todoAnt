import './App.css';
import CustomInput from './CustomInput';
import ToDo from './ToDo';


const App = () => {
  return (
    <div className="App">
      <h1>What's the plan today</h1>
      <CustomInput />
      <ToDo />

    </div>
  );
}

export default App;

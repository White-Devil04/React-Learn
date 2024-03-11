import './App.css';
import Assign1 from './Components/Assign1.js';
import Assign2 from './Components/Assign2.js';
import Assign3 from './Components/Assign3.js';
import Assign5 from './Components/Assign5.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Assign1/>
        <Assign2/>
        <Assign3/>
        {/* Assign4 is done in first-app */}
        <Assign5 message="Hello Dev" onPlay={(m)=> console.log(m)}/>
      </header>
    </div>
  );
}

export default App;

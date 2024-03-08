import './App.css';
import List from './Component/List';

function App() {
  const items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
  return (
    <div className="App">
        <List layout="numbered" items={items}/>
        <List layout="alpha" items={items}/>
        <List layout="bullet" items={items}/>
    </div>
  );
}

export default App;

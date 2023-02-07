
import './App.scss';
import CardContainer from './containers/CardContainer';

function App() {
  return (
    
    <div className="App">
      <h1 className='title'>Ticket Tracker</h1>
      <div className="search-fields">
        <select>
          <option value="0">Search by role:</option>
          <option value="1">Junior Software Develope</option>
          <option value="2">Software Developer</option>
          <option value="3">Senior Software Developer</option>
          <option value="4">Project Manager</option>
          <option value="5">Tester</option>
          <option value="6">Hard Man</option>
        </select>
        Search by name:<input type="text" />
      </div>
      
      <CardContainer/>
    </div>
  );
}

export default App;

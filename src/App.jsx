
import './App.scss';
import CardContainer from './containers/CardContainer';
import { useState } from 'react';
function App() {

  const [searchFilterName, setSearchFilterName] = useState("");
  const [searchFilterRole, setSearchFilterRole] = useState("");

  const handleNameInput = (event) => {
    setSearchFilterName(event.target.value)
  }

  const handleRoleInput = (event) => {
    setSearchFilterRole(event.target.value)
  }

  return (
    
    <div className="App">
      <h1 className='title'>Ticket Tracker</h1>
      <div className="search-fields">
        <select onChange={handleRoleInput}>
          <option value="">Search by role:</option>
          <option value="Junior Software Developer">Junior Software Developer</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Senior Software Developer">Senior Software Developer</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Tester">Tester</option>
          <option value="Hard Man">Hard Man</option>
        </select>
        Search by name:<input type="text" onChange={handleNameInput}/>
      </div>
      
      <CardContainer filterName={searchFilterName} filterRole={searchFilterRole}/>
    </div>
  );
}

export default App;

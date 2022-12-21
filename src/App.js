import './App.css';
import Homepage from './project/Homepage';
import { BrowserRouter as Router, Routes,Link, Switch, Route } from 'react-router-dom';
import AddContact from './project/AddContact';
import RemoveMain from './project/RemoveMain';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path='/' exact element={<Homepage/>} /> */}
          <Route path='/add-contact' element={<AddContact/>} />   
          <Route path='/' exact element={<RemoveMain/>} />                           
        </Routes>
      </Router>
    </div>
  );
}

export default App;


import './App.css';
import Nav from './Navbar/Nav';
import { BrowserRouter } from 'react-router-dom';
// import DevelopmentRoute from './development/DevelopmentRoute';

function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
        <Nav/> 
        {/* <DevelopmentRoute/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

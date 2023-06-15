import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Pages/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;


import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <h1>React Note App.</h1>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;

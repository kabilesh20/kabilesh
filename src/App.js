import './App.css';
import Signup from './Signup';
import Showdata from './Showdata';
import Main from './Main';
import Get from './Get';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Del from './Del';
import Home from './Home';
import Update from './Update';
function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Main" element={<Main/>}></Route>
        <Route exact path="/Update" element={<Update/>}></Route>
        <Route exact path="/Del" element={<Del/>}></Route>
        <Route exact path="/Get" element={<Get/>}></Route>
        </Routes>  
    </div>
    </Router>
  );
}

export default App;

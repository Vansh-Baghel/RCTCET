import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Login/LoginPage';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
            <Router>
            <Routes>
            <Route index path='/' element={<Home />}></Route>
                <Route index path='/Login' element={<LoginPage />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;

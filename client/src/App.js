import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/home/Home';
import Signup from './components/user/Signup';
import Signin from './components/user/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;

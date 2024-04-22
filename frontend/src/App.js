import logo from './logo.svg';
import './../node_modules/bootstrap/dist/css/bootstrap.css';

import './App.css';
import AddCompnay from './compnents/AddCompnay';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './compnents/Users';
import AddUser from './compnents/AddUser';

function App() {
  return (
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />}></Route>
            <Route path="/createcompany" element={<AddCompnay />}></Route>
            <Route path="/createuser" element={<AddUser />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

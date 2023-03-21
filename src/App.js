import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Signin from './Components/Signin';
import SideBar from './admin/SideBar';
import DisplayData from './admin/DisplayData';
import UserData from './admin/UserData';
import Request from './admin/Request';

const Firebase = require('./firebase/config');

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/admin-panel/home" element={<UserData />} />
            <Route path="/admin-panel/dashboard" element={<DisplayData />} />
            <Route path="/admin-panel/request" element={<Request />} />
        </Routes>
    );
};

export default App;

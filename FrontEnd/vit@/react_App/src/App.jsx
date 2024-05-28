/* eslint-disable react/prop-types */
<<<<<<< HEAD
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import { UserProvider } from './components/UserContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import NewLogin from './components/NewLogin';
import RegistrationForm from './components/RegistrationForm';
=======
import PropTypes from "prop-types";
// import Title from './components/Title';
// import UserDetail from './components/UserDetail';
// import Book from './components/Book';
// import Contador from './components/Contador';
// import InvoiceApp from './components/InvoiceApp';
// import User from './components/User';
// import Event from './components/Event';
import "bootstrap/dist/css/bootstrap.min.css";
//import Login from './components/Login';
import { UserProvider } from "./components/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
//import NewLogin from './components/NewLogin';
//import EventCard from './components/EventCard';
//import NewProfile from './components/NewProfile';
//import NewLogin from './components/NewLogin';
//import PruebaComponente from './components/PruebaComponente';
//import NewProfile from './components/NewProfile';
//import NewLogin from './components/NewLogin';

//import NewLogin from './components/NewLogin';
//import NewProfile from './components/NewProfile';
import NewLogin from "./components/NewLogin";
//git puimport EditProfile from './components/EditProfile';
//import Barra from './components/Barra';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";

import NewProfile from "./components/NewProfile";
//import EventCard from "./components/EventCard";
//import EditProfile from './components/EditProfile';
//import EventCard from './components/EventCard';
//import Footer from './components/Footer';
>>>>>>> origin/main

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<NewLogin />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};

export default App;

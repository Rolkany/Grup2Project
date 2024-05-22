<<<<<<< HEAD
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
// import Title from './components/Title';
// import UserDetail from './components/UserDetail';
// import Book from './components/Book';
// import Contador from './components/Contador';
// import InvoiceApp from './components/InvoiceApp';
// import User from './components/User';
// import Event from './components/Event';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Login from './components/Login';
import { UserProvider } from './components/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
//import NewLogin from './components/NewLogin';
//import EventCard from './components/EventCard';
//import NewProfile from './components/NewProfile';
//import NewLogin from './components/NewLogin';
//import PruebaComponente from './components/PruebaComponente';
//import NewProfile from './components/NewProfile';
//import NewLogin from './components/NewLogin';

//import NewLogin from './components/NewLogin';
//import NewProfile from './components/NewProfile';
import NewLogin from './components/NewLogin';
//git puimport EditProfile from './components/EditProfile';
//import Barra from './components/Barra';
=======
import React from 'react';
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from "./components/UserContext";
import Home from "./components/Home";
import NewLogin from "./components/NewLogin";
import RegistrationForm from "./components/RegistrationForm";
import EventCard from "./components/EventCard";
>>>>>>> origin/main

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="App">
<<<<<<< HEAD
          <NewLogin />
=======
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<NewLogin />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
          <EventCard />
>>>>>>> origin/main
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

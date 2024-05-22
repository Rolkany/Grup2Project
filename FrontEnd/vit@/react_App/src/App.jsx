import React from 'react';
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from "./components/UserContext";
import Home from "./components/Home";
import NewLogin from "./components/NewLogin";
import RegistrationForm from "./components/RegistrationForm";
import EventCard from "./components/EventCard";

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
          <EventCard />
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

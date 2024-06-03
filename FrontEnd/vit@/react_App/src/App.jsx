/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import { UserProvider } from './components/UserContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './components/Splash';
import Login from './components/Login';
import Home from './components/Home';
import NewLogin from './components/NewLogin';
import RegistrationForm from './components/RegistrationForm';
import QuienesSomos from './components/QuienesSomos';

import Footer from './components/Footer';


const App = () => {
  return (
<>
   <QuienesSomos/>
   </>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};

export default App;

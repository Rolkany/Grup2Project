/* eslint-disable react/prop-types */
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
import EventCard from "./components/EventCard";
//import Barra from './components/Barra';
import Splash from './components/Splash';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
const App = () => {
  return (
    <>
      <UserProvider>
        <div className="App">
<<<<<<< HEAD
          <Home/>
=======
          <EventCard />
>>>>>>> 4687136b6c971764aff9f00cdc947fa5bee4ca6d
        </div>
      </UserProvider>
    </>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};

export default App;

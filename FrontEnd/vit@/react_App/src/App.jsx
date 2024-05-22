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
import NewProfile from './components/NewProfile';
import NewLogin from './components/NewLogin';
//git puimport EditProfile from './components/EditProfile';
//import Barra from './components/Barra';

const App = () => {
  return (
    <>
      <UserProvider>
        <div className="App">
          <NewLogin />
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

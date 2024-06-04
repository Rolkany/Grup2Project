/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

import { UserProvider } from "./components/UserContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import NewLogin from "./components/NewLogin";
import RegistrationForm from "./components/RegistrationForm";
import NewEvent from "./components/NewEvent";
import EventList from "./components/EventList";
import MisEventos from "./components/MisEventos";
import "./index.css";
import NewProfile from "./components/NewProfile";
import EditProfile from "./components/EditProfile";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<NewLogin />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/creareventos" element={<NewEvent />} />
            <Route path="/eventlist" element={<EventList />} />
            <Route path="/eventlist" element={<EventList />} />
            <Route path="/newperfil" element={<NewProfile />} />
            <Route path="/editprofile" element={<EditProfile />} />
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

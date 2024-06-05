/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./components/UserContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import Home from "./components/Home";
import NewLogin from "./components/NewLogin";
import NewEvent from "./components/NewEvent";
import EventList from "./components/EventList";
import NewProfile from "./components/NewProfile";
import EditProfile from "./components/EditProfile";
import QuienesSomos from "./components/QuienesSomos";
import RegistrationForm from "./components/RegistrationForm";

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
            <Route path="/quienessomos" element={<QuienesSomos />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;

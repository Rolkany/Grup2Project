/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

import { UserProvider } from "./components/UserContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import NewLogin from "./components/NewLogin";
import RegistrationForm from "./components/RegistrationForm";
import NewEvent from "./components/NewEvent";

const App = () => {
  return (
    <UserProvider>
      <NewEvent />
      {/*    <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<NewLogin />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </div>
      </Router> */}
    </UserProvider>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};

export default App;

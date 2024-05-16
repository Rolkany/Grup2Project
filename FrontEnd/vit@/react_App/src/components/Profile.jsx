import { useContext } from 'react';
import UserContext from './UserContext';
import './Profile.css';
import logo from './pepon.png';
import Button from 'react-bootstrap/Button';

const Profile = () => {
  const { userId } = useContext(UserContext);

  return (
    <div className="profile">
      <div className="profile-img">
        <img src={logo} />
      </div>
      <h2>Profile</h2>
      <h3>Bienvenid@ {userId.username}</h3>

      {userId && <p>El id del usuario es: {userId.id}</p>}
      <div className="profile-eventos">
        <p>Eventos creados:</p>
        <p>{userId.createdEvents}</p>
        <Button variant="success">Eventos</Button>
      </div>
    </div>
  );
};

export default Profile;

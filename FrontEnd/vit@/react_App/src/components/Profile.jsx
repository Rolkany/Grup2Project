import { useContext } from 'react';
import UserContext from './UserContext';

const Profile = () => {
  const { userId } = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>
      {userId && <p>El id del usuario es: {userId}</p>}
    </div>
  );
};

export default Profile;

/* eslint-disable react/prop-types */
function UserDetail({ user, id }) {
  return (
    <p>
      Hola {user.name}, con id {id}. Edad: {user.age}
    </p>
  );
}

export default UserDetail;

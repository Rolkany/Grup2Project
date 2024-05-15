import userServices from '../services/userServices';
import Card from 'react-bootstrap/Card';

import Image from 'react-bootstrap/Image';
import eventsServices from '../services/eventServices';

const User = () => {
  const user = userServices();
  const events = eventsServices();
  return (
    <Card style={{ width: '18rem' }}>
      {user.map((item) => {
        return (
          <Card.Body key={item.id}>
            <Image src={item.imgUrl} rounded />
            <Card.Title>{item.firstName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              @{item.userName}
            </Card.Subtitle>
            <Card.Text>{item.des}</Card.Text>
            <Card.Link href="#">Editar Perfil</Card.Link>
            <Card.Header>Mis eventos</Card.Header>
            {events.map((element) => {
              if (element.createdBy === item.id) {
                return (
                  <>
                    <Card.Title key={element.id}>{element.title}</Card.Title>
                    <Card.Subtitle>{element.eventDate}</Card.Subtitle>
                  </>
                );
              }
            })}
          </Card.Body>
        );
      })}
    </Card>
  );
};

export default User;

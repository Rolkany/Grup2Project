import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import eventsServices from '../services/eventServices';
import userServices from '../services/userServices';
import languageServices from '../services/languageServices';

const Event = () => {
  const events = eventsServices();
  const users = userServices();
  const languages = languageServices();

  return (
    <>
      {events.map((item) => {
        return (
          <Card style={{ width: '18rem' }} key={item.id}>
            <Card.Img variant="top" src={item.imgUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>Próximo evento el {item.eventDate} !!!</Card.Text>
              {users.map((element) => {
                if (element.id === item.createdBy) {
                  return <p key={element.id}>Creado por: {element.userName}</p>;
                }
              })}
              {languages.map((language) => {
                if (language.id === item.language_id) {
                  return (
                    <>
                      <ul>
                        <li key={language.id}> Idioma: {language.language}</li>
                      </ul>
                    </>
                  );
                }
              })}
              <Button variant="primary">Inscribete!</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default Event;
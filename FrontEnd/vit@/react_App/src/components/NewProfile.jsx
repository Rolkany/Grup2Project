import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from 'mdb-react-ui-kit';
import logo from './pepon.png';

import { useContext } from 'react';
import UserContext from './UserContext';

const NewProfile = () => {
  const { userId } = useContext(UserContext);
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: '#ee7724', height: '200px' }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: '150px' }}
                >
                  <MDBCardImage
                    src={logo}
                    alt="imagen profile"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: '150px', zIndex: '1' }}
                  />
                  <MDBBtn
                    outline
                    color="dark"
                    style={{ height: '36px', overflow: 'visible' }}
                  >
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">@{userId.username}</MDBTypography>
                  <MDBCardText>{userId.email}</MDBCardText>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Eventos Creados
                    </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Eventos asistidos
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Acerca de mí</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">
                      {userId.phone}
                    </MDBCardText>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Opciones</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">
                      <MDBBtn className="mx-2" color="secondary">
                        Editar perfil
                      </MDBBtn>
                      <MDBBtn className="mx-2" color="secondary">
                        Crear Evento
                      </MDBBtn>
                    </MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">
                    Mis eventos
                  </MDBCardText>
                  <MDBCardText className="mb-0">
                    <a href="#!" className="text-muted">
                      Mostrar todos
                    </a>
                  </MDBCardText>
                </div>
                <MDBCol className="mb-2"></MDBCol>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default NewProfile;

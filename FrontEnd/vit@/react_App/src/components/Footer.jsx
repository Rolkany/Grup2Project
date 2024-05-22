import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div className="text-center p-3" style={{ backgroundColor: '#f8f9fa' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className="text-dark" href="">
          Grupo2
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
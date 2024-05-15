import invoiceServices from '../services/invoiceServices';
import Table from 'react-bootstrap/Table';

const InvoiceApp = () => {
  const { id, name, cliente, company, items } = invoiceServices();
  return (
    <>
      <h1>Ejemplo componente recuperacion data</h1>
      <ul>
        <li>Id: {id}</li>
        <li>Nombre: {name}</li>
      </ul>
      <h3>Datos del cliente</h3>
      <ul>
        <li>
          {cliente.name} {cliente.lastName}
        </li>
        <li>
          {cliente.address.street}, {cliente.address.number}
        </li>
      </ul>
      <h3>Datos de la empresa</h3>
      <ul>
        <li>{company.name}</li>
      </ul>
      <h4>Productos</h4>
      {/* <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.product}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.product}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default InvoiceApp;

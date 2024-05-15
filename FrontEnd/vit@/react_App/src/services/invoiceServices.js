import invoice from '../data/invoice';

const invoiceServices = () => {
  return invoice; //Es como una especie de GET, pero en modo local. En esta capa, haremos el fetch hacia el back, centralizando las peticiones que necesite el componente
};

export default invoiceServices;

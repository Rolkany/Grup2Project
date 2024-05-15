const invoice = {
  id: 1,
  name: 'Evento 01',
  cliente: {
    name: 'Pepe',
    lastName: 'Flores',
    address: {
      country: 'Spain',
      city: 'Cuenca',
      street: 'Av. de las Casas Colgantes',
      number: 12,
    },
  },
  company: {
    name: 'Tecnologias de Cuenca',
    fiscalNumber: 23345,
  },
  items: [
    {
      id: 1,
      product: 'Portal interdimensional',
      price: 10000,
      quantity: 1,
    },
    {
      id: 2,
      product: 'Dispositivo antigravedad',
      price: 4999,
      quantity: 10,
    },
    {
      id: 3,
      product: 'Atomizador 2.0',
      price: 8000,
      quantity: 1,
    },
    {
      id: 4,
      product: 'Paneles solares',
      price: 500,
      quantity: 100,
    },
  ],
};

export default invoice;

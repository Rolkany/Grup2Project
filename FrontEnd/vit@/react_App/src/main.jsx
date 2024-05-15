import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
      user={{
        name: 'Ivan',
        lastName: 'Andrada',
        age: 39,
      }}
      id={1}
      title="Cholon"
      book="Libro de prueba"
    />
  </React.StrictMode>
);

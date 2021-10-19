import React, {Fragment, useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import Producto from './components/producto';
import Carrito from './components/carrito';

function App() {

  // Listado de Productos
  const [ productos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS',   precio: 40 },
    { id: 3, nombre: 'Camisa NodeJS',  precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 70 },

  ]);

  // State para carrito de compras
  const [carrito, agregarProducto] = useState([]);


  // Obtener la Fecha
  const fecha = new Date().getUTCFullYear();


  return (
    <>
      <Header 
        titulo='Tienda Virtual'
      />


      <h1>Lista de Productos</h1>
        { productos.map(producto => (
          <Producto 
            key={producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
          />
      ))}

      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
      />


      <Footer 
        fecha= {fecha}
      />


    </>
  );
}

export default App;

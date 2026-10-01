
import { useEffect, useState } from 'react';

const productos = [
    {
        id: 1,
        nombre: 'Coca-Cola',
        categoria: 'Bebidas',
        precio: 25,
        imagen: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 2,
        nombre: 'Leche',
        categoria: 'Lacteos',
        precio: 28,
        imagen: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 3,
        nombre: 'Pan',
        categoria: 'Panaderia',
        precio: 35,
        imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 4,
        nombre: 'Huevos',
        categoria: 'Despensa',
        precio: 45,
        imagen: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80'
    },
   
  
];
// R
function Encabezado(nombre) {
    return (
        <div className="text-center">
            <h1>Mi Tiendita</h1>
            <p>Catalogo de productos</p>
            <p>Hola {nombre.usuario}</p>
        </div>
    );
}
// R
function Producto(producto) {
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <img
                    src={producto.imagen}
                    className="card-img-top"
                    height="180"
                />

                <div className="card-body">
                    <h5>{producto.nombre}</h5>
                    <p>Categoria: {producto.categoria}</p>
                    <p>Precio: ${producto.precio}</p>

                    <button className="btn btn-primary">
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}
// R
function Catalogo(lista) {
    return (
        <div className="row">
            {lista.productos.map((producto) => (
                <Producto
                    key={producto.id}
                    nombre={producto.nombre}
                    categoria={producto.categoria}
                    precio={producto.precio}
                    imagen={producto.imagen}
                />
            ))}
        </div>
    );
}

async function cargarProductos() {
    const datos = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 500);
    });

    return datos;
}

function esperar() {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
}

function App() {

    const [mostrar, setMostrar] = useState(false);
    const [contador, setContador] = useState(3);

    async function cargarCatalogo() {

        await esperar();

        const datos = await cargarProductos();

        console.log(datos);

        setMostrar(true);
    }

    useEffect(() => {

        const tiempo = setInterval(() => {

            setContador((numero) => {

                if (numero > 0) {
                    return numero - 1;
                }

                return 0;
            });

        }, 1000);

        cargarCatalogo();

        return () => clearInterval(tiempo);

    }, []);

    return (
        <div className="container mt-4">

            <Encabezado usuario="Carlos" />

            {!mostrar ? (

                <div className="text-center mt-5">
                    <p>El catalogo se esta cargando...</p>
                    <h2>{contador}</h2>
                </div>

            ) : (

                <Catalogo productos={productos} />

            )}

        </div>
    );
}

export default App;


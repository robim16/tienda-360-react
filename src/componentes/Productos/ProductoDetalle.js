import React, {useState, useEffect, useContext} from 'react'
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";

export const ProductoDetalle = () => {

    const value = useContext(DataContext)//asigna a value las variables del contexto
    const [productos] = value.productos;
    const addCarrito = value.addCarrito;
    const params = useParams();
    const [detalle, setDetalle] = useState([])
    const [url, setUrl] = useState(0)
    const [images, setImages] = useState('')
    let item = 0;

    useEffect(() => {
        productos.forEach(producto => {
            item = 0
            if (producto.id === parseInt(params.id)) {
                setDetalle(producto)
                setUrl(0)
            }
        })
    }, [params.id, productos])

    useEffect(() => {
        const values = `${detalle.img1}${url}${detalle.img2}`
        setImages(values)
    }, [url, params.id]);
    
    const handleInput = e => {
        const number = e.target.value.toString().padStart(2, '01');
        setUrl(number);
    }

    if(detalle.length < 1) return null;

    return (
        <>
            {
                <div className="detalles">
                    <h2>{detalle.title}</h2>
                    <p className="price">${detalle.price}</p>
                    <div className="grid">
                        <p className="nuevo">Nuevo</p>
                        <div className="size">
                            <select placeholder="Tamaño">
                                <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="3">3</option>
                                 <option value="4">4</option>
                                 <option value="5">5</option>
                                 <option value="6">6</option>
                                 <option value="7">7</option>
                                 <option value="8">8</option>
                                 <option value="9">9</option>
                            </select>
                            <p>Tamaño</p>
                        </div>
                    </div>
                    <button onClick={() => addCarrito(detalle.id)}>Añadir al carrito</button>

                    {
                        url ? <img src={images} alt={detalle.title} /> : <img src={detalle.image} alt={detalle.title} />
                    }

                    <img src={images} alt={detalle.title}></img>
                    <input type="range" min="1" max="36" value={url} onChange={handleInput} />
                    <div className="description">
                        <p><b>Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque earum at, ex totam odio beatae modi. Nemo consequatur officiis eveniet nostrum
                        ducimus deserunt hic quis tempora dolore et. Consequuntur, hic?</p>
                    </div>
                </div>
            }

            <h2 className="relacionados">Productos relacionados</h2>

            <div className="productos">
                {
                    productos.map(producto => {
                        if ((item < 6) && (detalle.category === producto.category)) {
                            item++;
                            return <ProductoItem 
                                key={producto.id}
                                id={producto.id}
                                title={producto.title}
                                image={producto.image}
                                category={producto.category}
                                price={producto.price}
                            />
                        }
                    })
                }
            </div>
        </>
    )
}

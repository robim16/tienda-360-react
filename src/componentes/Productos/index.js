import React, { useContext } from 'react'
import { DataContext } from "../../context/Dataprovider";
import { ProductoItem } from "./ProductoItem";

export const ProductosLista = () => {

    const value = useContext(DataContext)//importa el state global
    const [productos] = value.productos

    return (
        <>
        <h1 className="title">PRODUCTOS</h1>
        <div className="productos">
            {
                productos.map(producto => (
                    <ProductoItem 
                        key={producto.id}
                        id={producto.id}
                        title={producto.title}
                        image={producto.image}
                        category={producto.category}
                        price={producto.price}
                    />
                ))
            }
        </div>
        </>
    )
}

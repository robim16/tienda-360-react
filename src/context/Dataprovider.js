import React, { useState, useEffect, createContext } from "react";
import Data from '../Data.js';

export const DataContext = createContext();//permite crear states globales

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([]);
    const [menu, setMenu] = useState();//variables globales
    const [carrito, setCarrito] = useState([]);
    const [total , setTotal] = useState(0);

    useEffect(() => {
        const producto = Data.items;

        if (producto) {
            setProductos(producto);//setea el state de productos con el contenido de data
        } else {
            setProductos([]);
        }

    }, [])

    const addCarrito = (id) => {
        const check = carrito.every(item => {
            return item.id !== id;//evalúa si está el producto en el carrito
        })

        if (check) {
            const data = productos.filter(producto => {
                return producto.id === id;//trae la data del producto agregado del array de productos
            })
            setCarrito([...carrito, ...data])//destructuring de carrito y fusión con el producto agregado
        }

        else{
            alert('El producto ha sido agregado anteriormente')
        }
    }

    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
        if (dataCarrito) {
            setCarrito(dataCarrito)//obtiene del localStorage el carrito y setea el state
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCarrito',JSON.stringify(carrito))
    }, [carrito])//setea el localstorage

    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, item) => {
                return prev + (item.price * item.cantidad);//prev es un acumulador
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [carrito])

    const value = {
        productos : [productos],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total , setTotal]
    }

    return (
        <DataContext.Provider value = { value }>
            {props.children}
        </DataContext.Provider>
    )
}
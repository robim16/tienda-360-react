import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Inicio } from "./Inicio";
import { ProductosLista } from "./Productos";
import { ProductoDetalle } from "./Productos/ProductoDetalle";

export const Paginas = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/productos" exact component={ProductosLista} />
                <Route path="/producto/:id" exact component={ProductoDetalle} />
            </Switch>
        </section>
    )
}

import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { boxicons } from "boxicons";
import { Header } from "./componentes/Header";
import { Paginas } from "./componentes/Paginas";
import { Carrito } from "./componentes/Carrito";
import { DataProvider } from "./context/Dataprovider";

function App() {
  return (
    <>
    <boxicons />
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Carrito />
          <Paginas />
        </Router>
      </div>
    </DataProvider>
    </>
  );
}

export default App;

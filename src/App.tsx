import { useState } from "react";
import Header from "./components/Header";
import ListaPeliculas from "./components/ListaPeliculas";
import { peliculas } from "./data";

function App() {
  const [busqueda, setBusqueda] = useState<string>("");

  const filtradas = peliculas.filter((p) =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <Header />
      <input
        type="text"
        placeholder="Buscar película..."
        value={busqueda}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBusqueda(e.target.value)}
        style={{ margin: "1rem", padding: "0.5rem" }}
      />
      <ListaPeliculas peliculas={filtradas} />
    </div>
  );
}

export default App;
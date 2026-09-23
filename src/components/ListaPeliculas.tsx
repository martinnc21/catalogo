import type {Pelicula} from "../types";
import TarjetaPelicula from "./TarjetaPelicula";

interface Props {
    peliculas:Pelicula[];
}

export default function ListaPelicula({peliculas}:Props){
    return(
        <div style = {{display: "flex", gap: "1rem", flexwrap : "wrap", padding: "1rem"}}>
            {peliculas.map((p) => (
                <TarjetaPelicula key={p.id} pelicula={p} />
            ))}
        </div>
    );
}
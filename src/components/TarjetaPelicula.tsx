import type {Pelicula} from "../types";

interface Props{
    pelicula : Pelicula;
}

export default function TarjetaPelicula({pelicula}:Props){
    return(
        <div style = {{border: "1px solid #ccc", padding : "0.5rem", width: "150px"}}>
            <img src={pelicula.imagen} alt={pelicula.titulo} style={{width :"100%"}} />
            <h3>{pelicula.titulo}</h3>
            <p>{pelicula.año}</p>
        </div>        
    );
}
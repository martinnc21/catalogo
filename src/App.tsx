import Header from "./components/Header"
import ListaPeliculas from "./components/ListaPeliculas"
import {peliculas} from "./data"

function App(){
    return(
        <div>
            <Header />
            <ListaPeliculas peliculas = {peliculas} />
        </div>
    );
}

export default App;
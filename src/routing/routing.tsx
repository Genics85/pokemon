import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Items from "../pages/Items";

function AppRouter(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokemons" element={<Items/>}/>
        </Routes>
    )
}

export default AppRouter
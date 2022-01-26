import React  from "react";
import{ Routes, Route  } from "react-router-dom";
import Home from './pages/Home';
import Config from './pages/config';
import Sobre from './pages/sobre';



export default() =>{
   return (
    <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/config" exact element={<Config />} />

        <Route path="/sobre" exact element={<Sobre />} />

                
    </Routes>
    );
}


 
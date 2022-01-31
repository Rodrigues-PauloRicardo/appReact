import React  from "react";
import{ Routes, Route  } from "react-router-dom";
import Home from './pages/Home';
import Config from './pages/config';
import Sobre from './pages/sobre';
import Goku from './pages/goku';
import Bulma from './pages/bulma';
import Yamcha from './pages/yamcha';

export default() =>{
   return (
    <Routes>

        <Route path="/" exact element={<Home />} />

        <Route path="/goku" exact element={<Goku />} />

        <Route path="/bulma" exact element={<Bulma />} />

        <Route path="/yamcha" exact element={<Yamcha />} />

        <Route path="/config" exact element={<Config />} />

        <Route path="/sobre" exact element={<Sobre />} />

                
    </Routes>
    );
}


 
import React  from "react";
import{ Routes, Route  } from "react-router-dom";
import Home from './pages/Home';
import Creditos from './pages/creditos';
import Goku from './pages/goku';
import Bulma from './pages/bulma';
import Yamcha from './pages/yamcha';
import Kuririn from './pages/kuririn';
import Tenshinhan from './pages/tenshinhan';
import Piccolo from './pages/piccolo';
import Gohan from './pages/gohan';
import Vegeta from './pages/vegeta';
import Trunks from './pages/trunks';

export default() =>{
   return (
    <Routes>

        <Route path="/" exact element={<Home />} />
        <Route path="/creditos" exact element={<Creditos />} />
        <Route path="/goku" exact element={<Goku />} />
        <Route path="/bulma" exact element={<Bulma />} />
        <Route path="/yamcha" exact element={<Yamcha />} />
        <Route path="/kuririn" exact element={<Kuririn />} />
        <Route path="/tenshinhan" exact element={<Tenshinhan />} />
        <Route path="/piccolo" exact element={<Piccolo/>} />
        <Route path="/gohan" exact element={<Gohan />} />
        <Route path="/vegeta" exact element={<Vegeta />} />
        <Route path="/trunks" exact element={<Trunks />} />
        
            
    </Routes>
    );
}


 
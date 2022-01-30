import React from "react";
import {AreaHeader} from './styled';
import { Link } from 'react-router-dom';


function Header(){
    return (
        <AreaHeader>
        <div className="container">
            <div className="logo">
                <img src="../../../logo.png" />                
                </div>
            <nav>
                <ul>
                    <li><Link to="./">Inicio</Link></li>
                    <li><Link to="./config">configurações</Link></li>
                    <li><Link to="./logout">Sair</Link></li>
                </ul>
            </nav>
        </div>        
        </AreaHeader>
    );
}

export default Header;
import React from "react";

import { CaixaPage, ImgFundo} from "./styled";

import { ContainerPage, TitlePage } from '../../components/Main';

import img from "../../img/dragon.jpg";

import { Link } from 'react-router-dom';


const Page = () => {
    return(        
<>
    <ContainerPage>
        <TitlePage>Principais personagens de Dragon Ball</TitlePage>
        <p>Esta é uma lista de personagens da série de mangá e anime Dragon Ball, criados por Akira Toriyama. A série tem lugar num universo ficcional, e acompanha as aventuras de Son Goku desde sua infância até adulto enquanto ele treina artes marciais e explora o mundo em busca das sete Esferas do Dragão (Dragon Balls), artefatos usados para invocar um dragão que realiza desejos. Durante o andamento da história, Goku encontra aliados como Bulma, Kuririn e Yamcha, rivais como Tenshinhan, Piccolo e Vegeta, e inimigos como Freeza, Cell e Majin Boo.
Embora muitos dos personagens sejam seres humanos com força sobre-humana e/ou habilidades sobrenaturais, Dragon Ball também inclui animais antropomórficos e formas de vida extraterrestre, bem como vários personagens que são deuses que governam o universo.</p> 
    </ContainerPage>

    <ImgFundo>
    <CaixaPage>               
                                
            <button><Link to="./goku">Goku</Link></button>            
            <button><Link to="./bulma">Bulma</Link></button>
            <button><Link to="./yamcha" >Yamcha</Link></button>
            

            <button><Link to="./kuririn">Kuririn</Link></button>
            <button><Link to="./config">Tenshinhan</Link></button>
            <button><Link to="./logout">Piccolo</Link></button> 
            <button><Link to="./>Gohan">Gohan</Link></button>
            <button><Link to="./config">Vegeta</Link></button>
            <button><Link to="./logout">Trunks</Link></button>     
                       
    </CaixaPage>
    <img src={img} alt="" /> 
</ImgFundo>
    
</>
);
}

export default Page;
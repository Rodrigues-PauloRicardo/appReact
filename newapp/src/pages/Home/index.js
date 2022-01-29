import React from "react";

import { CaixaPage, ImgFundo} from "./styled";

import { ContainerPage, TitlePage } from '../../components/Main';

import img from "../../img/evolution.png";


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
        <button>Goku</button>
        <button>Bulma</button>
        <button>Yamcha</button>
        <button>Kuririn</button>
        <button>Tenshinhan</button>
        <button>Piccolo</button>
        <button>Gohan</button>
        <button>Vegeta</button>
        <button>Trunks</button>
        <button>Trunks</button>    
    </CaixaPage>
    <img src={img} alt="" /> 
</ImgFundo>
    
</>
);
}

export default Page;
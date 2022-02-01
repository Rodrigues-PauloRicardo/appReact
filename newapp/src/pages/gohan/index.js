import React from "react";

import { ContainerPage, TitlePage, Descrition} from '../../components/Main';

import imagemGohan from '../../img/Gohan.jpg';

const Page = () => {
    return(
        <>

    <ContainerPage>
        <TitlePage>Son Gohan (孫 悟飯 Son Gohan)</TitlePage>
        <Descrition> 
            <p>O nome da personagem vem da palavra japonesa "gohan", que significa arroz frito.[1] Dentro da série todos os Saiyajins possuem um nome que é formado a partir de um trocadilho com um vegetal. Toriyama disse que "apesar de não ser um vegetal, o arroz muitas vezes se relaciona com eles". Como Gohan não é Saiyajin completo, Toriyama lhe deu esse nome.
            Ao final do capítulo 36, onde termina a Saga Cell, Akira pretendia transformar Gohan no protagonista da história mas chegou a conclusão que ele não seria adequado para esse papel.[2] Os desenhos iniciais de Gohan na Saga Boo, onde ele é um jovem adulto, apresentam a personagem usando óculos, boné e jaqueta para ter uma aparência mais normal. </p>
        <img src={imagemGohan} alt="imagem personagem gohan"/>            
        </Descrition>

    </ContainerPage>
</>
);
}

export default Page;
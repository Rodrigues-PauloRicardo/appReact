import React from "react";

import { ContainerPage, TitlePage, Descrition} from '../../components/Main';

import imagemPiccolo from '../../img/Piccolo.jpg';

const Page = () => {
    return(
        <>

    <ContainerPage>
        <TitlePage>Piccolo (ピッコロ Pikkoro)</TitlePage>
        <Descrition> 
            <p>Piccolo foi criado por Akira Toriyama quando ele queria um antagonista que fosse um verdadeiro personagem maligno. Antes da sua criação, quase todos os vilões da série eram considerados muito adoráveis. Quando Piccolo foi criado, Toriyama percebeu que sua aparição se transformou em um dos momentos mais interessantes da história e ele se tornou um de seus personagens favoritos. Apesar de que Akira considerava clichê a transformação de um vilão em herói, ele comentou que ainda se sentia emocionado ao desenhar Piccolo pois apesar de sua cara assustadora, ele se tornou uma criatura bastante simpática. Piccolo surgiu dos desenhos que Akira fazia de humanos mas depois foi planejado para ser um demônio</p>
        <img src={imagemPiccolo} />            
        </Descrition>

    </ContainerPage>
</>
);
}

export default Page;
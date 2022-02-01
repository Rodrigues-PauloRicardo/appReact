import React from "react";

import { ContainerPage, TitlePage, Descrition} from '../../components/Main';

import imagemVegeta from '../../img/Vegeta.jpg';

const Page = () => {
    return(
        <>

    <ContainerPage>
        <TitlePage>Vegeta (ベジータ Bejīta)</TitlePage>
        <Descrition> 
            <p>Quando Vegeta surge na série, é um personagem sádico, chegando ao ponto de matar seu companheiro de longa data, Nappa, quando o mesmo não consegue derrotar Son Goku. Durante esse tempo, Vegeta demonstra um grande desejo por imortalidade e poder. A personalidade de Vegeta muda de assassino cruel para anti-herói vingativo, obcecado por se tornar mais forte do que Goku. Após algum tempo, Bulma se apaixona por Vegeta, e com ele tem seu primeiro filho, Trunks. Como resultado de seu amor por Bulma e o nascimento de seu filho, Vegeta se torna simplesmente um rival de Goku e escolhe a Terra como um lugar para se estabelecer e viver. Mais tarde, Vegeta e Bulma tem mais uma filha, Bra, que é apresentada apenas dez anos após a derrota de Majin Boo, nos últimos episódios da franquia Dragon Ball Z. </p>
        <img src={imagemVegeta} alt="imagem personagem vegeta"/>            
        </Descrition>

    </ContainerPage>
</>
);
}

export default Page;
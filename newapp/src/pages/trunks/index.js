import React from "react";

import { ContainerPage, TitlePage, Descrition} from '../../components/Main';

import imagemTrunks from '../../img/Trunks.png';

const Page = () => {
    return(
        <>

    <ContainerPage>
        <TitlePage>Trunks Briefs (トランクスブリーフ 'Torankusu Burīfu')s</TitlePage>
        <Descrition> 
            <p>O Trunks do Futuro, veio de uma dimensão catastrófica, 20 anos à frente, onde Goku morreu de um vírus cardíaco e os Guerreiros Z foram assassinados pelos Androides 17 e 18 construídos pelo Dr. Maki Gero, cientista da Força Red Ribbon, que foi destruída por Goku.[2][3][4]
Gohan foi o único que sobreviveu e treinou Trunks na esperança de vencerem os Androides. Depois de algum tempo, Gohan também foi morto pelos Androides. Posteriormente, furioso com a morte de Gohan, Trunks se transforma em Super Sayajin. Passados 3 anos, Trunks já tinha sido derrotado várias vezes pelos Androides e então, com uma máquina do tempo construída por Bulma, ele volta ao passado. Lá, ele encontra Freeza e Rei Cold que invadiram a Terra em busca de Goku. Trunks derrota os dois facilmente, após se revelar como Super Saiyajin</p>
        <img src={imagemTrunks} />           
        </Descrition>

    </ContainerPage>
</>
);
}

export default Page;
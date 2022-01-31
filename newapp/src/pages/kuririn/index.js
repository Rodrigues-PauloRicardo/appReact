import React from "react";

import { ContainerPage, TitlePage, Descrition} from '../../components/Main';

import imagemKuririn from '../../img/Kuririn.png';

const Page = () => {
    return(
        <>

    <ContainerPage>
        <TitlePage>Personagem: Kuririn (クリリン) </TitlePage>
        <Descrition> 
            <p>Nascido e crescido em um templo shaolin, Kuririn partiu para treinar com o renomado Mestre Kame aos treze anos. Chegando em sua ilha ele conheceu Goku e se autoproclamou seu rival. Contudo, ao longo de seis meses de treinamento, Kuririn passou a aceitá-lo e os dois se tornaram melhores amigos. Com o treino concluído, o Mestre Kame leva Kuririn e Goku para participarem do 21º Torneio de Artes Marciais. Após passar facilmente pelas eliminatórias, Kuririn derrota um lutador chamado Bacterian mas perde para Jackie Chun nas semifinais. Mais tarde é revelado que Jackie Chun era o Mestre Kame disfarçado para prevenir que seus alunos vencessem o torneio e se tornassem arrogantes. Kuririn continua treinando sob as ordens de seu mestre e posteriormente ajuda Goku a enfrentar o General Blue e a procurar as Esferas do Dragão. Três anos mais tarde, Kuririn participa do 22º Torneio de Artes Marciais. Ele e Goku encontram dois lutadores, Chaos e Tenshinhan, alunos do rival do Mestre Kame e decidem derrotá-los no torneio. Kuririn vence o Chaos e chega a semifinais, onde luta contra Goku e acaba perdendo. Logo após o torneio, seguindo o retorno de Piccolo Daimaoh, Kuririn é morto por Tambourine. Após a vitória de Goku sobre Piccolo, Kuririn é ressuscitado por Shenlong. Depois de mais três anos, Kuririn entra no 23º Torneio de Artes Marcis. Porém, desta vez ele perde nas quartas-de-finais para Piccolo Junior..</p>
        <img src={imagemKuririn} />            
        </Descrition>

    </ContainerPage>
</>
);
}

export default Page;
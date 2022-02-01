import React from "react";

import { ContainerPage, TitlePage, Descrition} from '../../components/Main';

import imagemKuririn from '../../img/Kuririn.png';

const Page = () => {
    return(
        <>

    <ContainerPage>
        <TitlePage>Personagem: Kuririn (クリリン) </TitlePage>
        <Descrition> 
            <p>Nascido e crescido em um templo shaolin, Kuririn partiu para treinar com o renomado Mestre Kame aos treze anos. Chegando em sua ilha ele conheceu Goku e se autoproclamou seu rival. Contudo, ao longo de seis meses de treinamento, Kuririn passou a aceitá-lo e os dois se tornaram melhores amigos. Com o treino concluído, o Mestre Kame leva Kuririn e Goku para participarem do 21º Torneio de Artes Marciais. Após passar facilmente pelas eliminatórias, Kuririn derrota um lutador chamado Bacterian mas perde para Jackie Chun nas semifinais. Mais tarde é revelado que Jackie Chun era o Mestre Kame disfarçado para prevenir que seus alunos vencessem o torneio e se tornassem arrogantes. .</p>
        <img src={imagemKuririn} alt="imagem personagem Kuririn" />            
        </Descrition>

    </ContainerPage>
</>
);
}

export default Page;
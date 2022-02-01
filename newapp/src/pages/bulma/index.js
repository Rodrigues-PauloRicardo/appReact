import React from "react";

import { ContainerPage, TitlePage, Descrition} from '../../components/Main';

import imagemBulma from '../../img/bulma.jpg';

const Page = () => {
    return(
        <>

    <ContainerPage>
        <TitlePage>Bulma Briefs (ブルマ ブリーフ Buruma Burīfu)</TitlePage>
        <Descrition> 
            <p>Bulma é uma paródia direta da personagem Xuanzang de Jornada ao Oeste. Os primeiros desenhos da personagem mostram uma jovem vaqueira que acompanha um garoto macaco, mas essa ideia foi abandonada. A vaqueira foi substituída por uma garota da cidade cujo nome seria Pinchi, mas Toriyama depois a chamou de Bulma.[2] Apesar de Xuanzang ser um monge, o nome japonês de Bulma, "Buruma", é o nome de uma famosa marca de shorts femininos para ginástica no Japão. O nome "Bulma" faz referência à palavra "bloomers", outro tipo de shorts femininos bastante popular no início do século XX. Bulma, assim como todas as outras personagens femininas da série, foi criada seguindo a ideia de que "mulheres fracas são sem graça, então elas devem ser bonitas, sexy e fortes física ou psicologicamente</p>
        <img src={imagemBulma} alt="imagem personagem bulma"/>            
        </Descrition>

    </ContainerPage>
</>
);
}

export default Page;
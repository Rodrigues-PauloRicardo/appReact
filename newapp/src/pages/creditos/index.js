import React from "react";

import { ContainerPage, TitlePage, Descrition, Creditos} from '../../components/Main';

import imagemWiki from '../../img/Wikipedia.png';


const Page = () => {
    return(
        <>

    <ContainerPage>
        <TitlePage>Créditos de textos e imagens</TitlePage>
        <Descrition> 
            <Creditos>
             <img src={imagemWiki} alt="imagem globo wikipedia" /> 
            </Creditos>    
        </Descrition>

    </ContainerPage>
</>
);
}

export default Page;
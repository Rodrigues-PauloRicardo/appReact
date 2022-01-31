import React from "react";

import { ContainerPage, TitlePage, Descrition} from '../../components/Main';

import imagemWiki from '../../img/Wikipedia.png';


const Page = () => {
    return(
        <>

    <ContainerPage>
        <TitlePage>Créditos de textos e imagens</TitlePage>
        <Descrition> 
             <img src={imagemWiki} />    
        </Descrition>

    </ContainerPage>
</>
);
}

export default Page;
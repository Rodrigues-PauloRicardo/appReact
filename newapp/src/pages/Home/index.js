import React from "react";

import { CaixaPage } from "./styled";

import { ContainerPage, TitlePage } from '../../components/Main';

const Page = () => {
    return(
<>
    <ContainerPage>
        <TitlePage>Seja Bem Vindo!!</TitlePage>
    </ContainerPage>


    <CaixaPage>        
        <button>ERA PALEOZOICA</button>
        <button>ERA MESOZOICA</button>
        <button>PERIODO 3</button>
        <button>PERIODO 4</button>
        <button>PERIODO 5</button>               
    </CaixaPage>

    
</>
);
}

export default Page;
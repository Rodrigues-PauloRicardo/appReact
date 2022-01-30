import React from "react";

import { ContainerPage, TitlePage, Descrition} from '../../components/Main';

import imagemGoku from '../../img/SonGoku.jpg';

const Page = () => {
    return(
        <>

    <ContainerPage>
        <TitlePage>Personagem: Son Goku (孫悟空 Son Gokū</TitlePage>
        <Descrition> <img src={imagemGoku} /> 
            <p>Goku foi baseado em Tanton, o protagonista da série Dragon Boy e um dos primeiros personagens de Toriyama[5] (nessa história, a principal característica física de Tanton era um par de asas). Quando Akira decidiu criar Dragon Ball, ele usou o romance Jornada ao Oeste, de Wu Cheng'en, como inspiração. O nome adotado por Toriyama para o personagem é a escrita japonesa do nome chinês Sun Wukong, que é a personagem central da história. Para ser criativo com o personagem, Toriyama declarou que ele projetou Goku para ser um garoto humano com um rabo de macaco, em vez de ser um símio completo como Sun Wukong. Ele decidiu fazer isso porque o rabo seria visível até mesmo quando Goku tentasse escondê-lo.[5] Apesar de Goku ser tratado como uma pessoa de outro planeta, Toriyama tinha inicialmente a ideia de fazer dele um terráqueo, mas, com a introdução de novos lutadores de outros planetas, foi mais tarde estabelecido que Goku seria um Saiyajin.</p>
            
          
        </Descrition>

    </ContainerPage>
</>
);
}

export default Page;
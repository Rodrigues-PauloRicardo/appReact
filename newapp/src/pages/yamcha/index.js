import React from "react";

import { ContainerPage, TitlePage, Descrition} from '../../components/Main';

import imagemYamcha from '../../img/Yamcha.jpg';

const Page = () => {
    return(
        <>

    <ContainerPage>
        <TitlePage>Personagem: Yamcha (ヤムチャ Yamucha)</TitlePage>
        <Descrition> 
            <p>Yamcha é o segundo personagem cuja aparência sofre o maior número de alterações durante a série Dragon Ball, perdendo somente para Bulma. Ao todo ele já teve nove cortes de cabelo diferentes. Alguns desses penteados foram passados para Son Gohan[14] e Son Goten.[15] Logo no início do mangá, Yamcha veste uma longa blusa verde com um manto vermelho e um calça bege.[5] Em sua blusa está o kanji  cujo significado é algo parecido com música ou alegria. Posteriormente, Yamcha passa a utilizar o uniforme da tartaruga com kanji Kame "Tartaruga")[16] em seu peitoral e em suas costas. Ele permanece com esse uniforme até a Saga Boo, exceto quando não está lutando, momento em que usa uma blusa branca e uma calça jeans.Entretanto, durante a Saga Freeza, o seu kanji muda de Kame para Kaioh "Rei dos Mundos"). A partir da Saga Boo, Yamcha veste uma camisa branca por baixo de uma jaqueta amarela e uma calça da mesma cor. O personagem é mais reconhecido pela cicatriz em sua bochecha esquerda cuja origem nunca foi revelada.</p>
        <img src={imagemYamcha} />            
        </Descrition>

    </ContainerPage>
</>
);
}

export default Page;
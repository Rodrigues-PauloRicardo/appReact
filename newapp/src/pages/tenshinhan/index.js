import React from "react";

import { ContainerPage, TitlePage, Descrition} from '../../components/Main';

import imagemTenshinhan from '../../img/Tenshinhan.png';

const Page = () => {
    return(
        <>

    <ContainerPage>
        <TitlePage>Personagem: Tenshinhan (天津飯)</TitlePage>
        <Descrition> 
            <p>Tenshinhan é apresentado como o melhor aluno do rival do mestre Kame-Sennin, mestre Tsuru-Sen'nin (鶴 仙人?), que inscreve ele e Chaos no Tenkaichi Budokai para que derrotassem os alunos do seu rival. Ele começa como um arrogante, mas talentoso artista marcial, rivalizando Goku, Kuririn e especialmente Yamcha. Tenshinhan derrota Yamcha brutalmente na primeira luta ao quebrar sua perna. Pouco depois da luta, Tenshinhan ganha conhecimento da aparente morte de Taopaipai por Goku e decide que matará seu oponente durante o torneio. Nas semifinais, Tenshinhan enfrenta e vence o Mestre Kame, disfarçado de Jackie Chun, que consegue abalar o seu espírito assassino. Durante a final, ele entra em discussão com Tsuru ao se recusar a matar Goku.  </p>
        <img src={imagemTenshinhan} alt="imagem personagem tenshinhan" />            
        </Descrition>

    </ContainerPage>
</>
);
}

export default Page;
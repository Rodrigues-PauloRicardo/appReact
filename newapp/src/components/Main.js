//pasta para formatação de página

import styled from "styled-components";

export const ContainerPage = styled.div`
  
 p{
    font-size: 21px;
    font-family: Monotype Corsiva, Times, Serif ;
    font-weight: bold;
    display: flex;
    text-align: center;
}
`;

export const  TitlePage = styled.h1`
padding: 15px;
display:flex;
justify-content:center;
text-align: center;
background-color:#9C3635; 
font-size:24px;
color: #fff;
`


export const  Descrition = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 500px;
color: black;
background-color: #C8472F;

p{
    margin: 10px;
}

img{
    margin: 5px;
    
    overflow: hidden;
}
`


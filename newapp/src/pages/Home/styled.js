import styled from "styled-components";

import logo from '../../img/fundo.png';

export const CaixaPage = styled.div`
    padding: 20px;
    background-image: url(${logo});
    background-repeat: no-repeat; 
    background-size: cover;    
    height:100vh;
    display:flex;
    flex-direction: column;            
    button{
    width:150px;        
`

export const ContainerPage = styled.div`
    display:flex;
    flex-direction: column;        
    background-color: red;   
    display:flex;
    justify-content: center;
    text-align: center;
    font-family: sans-serif;
   
    p{
        color: #fff;
    } 
    `

    export const  TitlePage = styled.h1`
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    height: 6vh;
    font-size:24px;

`
   
import styled from "styled-components";



export const ImgFundo = styled.div`
      display: flex;
      flex-direction: column;     
       img{
       width: 100%;
       height: auto;  
        
`;


export const CaixaPage = styled.div`
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    height: 30px; 
    @media(max-width: 550px) {
        display: flex;
        flex-wrap: wrap;
        height: 250px;
        align-content: space-between;
    }
   
    
    button{
        width: 100%; 
        background-color:#66203C;                          
    }
    
    a{
      text-decoration: none;
      color:#fff;

      &:hover{
          color: #F5BB00;
      }

  `;

   
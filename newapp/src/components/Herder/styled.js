import styled from 'styled-components';

export const AreaHeader = styled.div` 
    height: 60px;
    background-image: linear-gradient(to right, #FE5D26, #370d44);
    color: #fff;  

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center; 
        @media(max-width: 360px) {
            display: flex;
            position: absolute
            margin-top: 3%;
    }

    .logo{
           flex:1;

           img{    
            width: 180px;
           }

    }
    nav{
        ul{
            display:flex;
            @media(max-width: 550px) {
                display: flex;
                margin-top: 3%;
                flex-direction: column;
                
            }
        }
        li{
            list-style:none;
            margin-left: 20px;
            a{
                text-decoration: none;
                color:#fff;

                &:hover{
                    color: #F5BB00;
                }
            }
        }

    }
      
    
    `;


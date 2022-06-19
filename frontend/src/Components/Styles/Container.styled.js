import styled from "styled-components";

export const MainContainer = styled.div`
max-width: 900px;
margin: 14px auto;
max-height: 361px;
border: 2px solid steelblue;
padding: 15px;
border-radius: 5px;

`;

export const LoginContainer = styled.div`
max-width: 25%;
margin: 13px auto;
height: 300px;
border: 2px solid steelblue;
padding: 15px;
border-radius: 5px;
background-color: white;
opacity: 85%;
box-shadow: 0px 0px 15px -4px;
text-align: center;
align-content: center;
`;

export const CostContainer = styled.div`
margin: 10px;
max-width: 250px;
overflow: auto;
height: 223px;
padding: 5px;
border-radius: 5px;
align-items: center;
font-size: 20px;
font-family: sans-serif;
margin-left: 1.8%;
box-shadow: 0px 0px 15px -4px;
transition: 0.3s;
animation: ease-in;
margin-top: -1px;

:hover{
    transform: scale(1.07);
    box-shadow: 0px 0px 15px 0px;
}
`;

export const GraphContainer = styled.div`
margin: 10px ;
min-width: 320px;
min-height: 225x;
box-shadow: 0px 0px 15px -4px;
padding: 5px;
border-radius: 5px;
text-align: center;
font-size: 20px;
font-weight: bold;
font-family: sans-serif;
transition: 0.3s;
animation: ease-in;


:hover{
    transform: scale(1.07);
    box-shadow: 0px 0px 15px 0px;
}
`;

export const FilterContainer = styled.div`
min-width: 280px;
min-height: 200px;
text-align: center;


`;

export const BackgroundContainer = styled.div`

video{
    position: absolute;
    z-index: -1;
    top: 0;
    left:0;
    width:100%;
    height:100vh;
    opacity: 35%;
    object-fit: cover;
}

`;
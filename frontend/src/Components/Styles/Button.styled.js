import styled from "styled-components";

export const StyledButton = styled.button`
color: white;
border: none;
padding: 10px 20px;
margin: 5px;
border-radius: 5px;
cursor: pointer;
font-size:15px;
margin-left: 80%;
width: 15%;
margin-top: -10px;

:hover{
   opacity: 80%;
   transform: scale(0.95);
}
`;

export const StyledFormButton = styled.button`
background: green;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
max-width: 15%;
margin-right: 2%;
max-height:60px;

:hover{
   opacity: 80%;
   transform: scale(0.95);
}
`;

export const StyledFilterButton = styled.button`
background: gray;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
width: 90%;
padding: 10px 20px;
margin-top: 10px;

:hover{
   opacity: 80%;
   transform: scale(0.95);
}
`;
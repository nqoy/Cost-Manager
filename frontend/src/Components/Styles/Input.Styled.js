import styled from "styled-components";

export const StyledInput = styled.div`

p {
  font-size: 10px;
  color: #d40a00;
  font-weight: bold;
  margin-top:2px;
 }

  input {
    width: 130px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid;
    border-color: #cdcdcd;
    max-width: 80%;
  } 

  select {
    width: 130px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid;
    border-color: #cdcdcd;
    max-width: 80%;
  }

  &:focus {
    outline: none;
  }
  
`;

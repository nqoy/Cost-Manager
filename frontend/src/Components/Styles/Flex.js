import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div,
    & > ul,
    & > Button {
        flex: 1;
    }
`

export const SmallFlex = styled.div`
    display: flex;
    justify-content: center;
    
    div{
    text-align: center;
    max-width: 98%;
    font-weight: normal;
    }
    
    label{
    font-weight: bold
    }
  
    & > div,
    & > ul,
    & > Button {
        flex: 0.2;
    }
`

export const MidFlex = styled.div`
    display: flex;
    justify-content: center;
    
    div{
    text-align: center;
    max-width: 98%;
    font-weight: normal;

    }
    
    label{
        font-weight: bold
    }
    
    & > div,
    & > ul,
    & > Button {
        flex: 0.5;
    }
`


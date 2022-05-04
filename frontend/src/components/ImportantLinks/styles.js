import styled from 'styled-components';

export const Background = styled.div`
    background: #d3dbd3;   
    border-radius:20px;
    width:fit-content; 
`
export const Centering = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    padding-top:20px;
`

export const Heading = styled.h3`
    font-family: Monsterrat, sans-serif;
    text-align:center;
    background:#A3BDA7;
    border-radius:20px;
    margin:auto;
    padding:10px 15px;
    margin:20px;
` 

export const LinkElement = styled.p`
    font-family: Monsterrat, sans-serif;
    padding-left:20px;

`

export const Hyperlink = styled.a`
   
    &:visited {
        color:#77a17d;
    }

    &:link {
        color:black; 
    }
`
import styled from 'styled-components'

export const FormElements = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:auto;
    padding:15px;
    gap:5px;
`
export const Background = styled.div`
    background: #d3dbd3;
    border-radius:20px;
    margin:20px;
    padding:10px;
    width:fit-content;
`
export const Body = styled.div`
    display:flex;
    flex-direction:column;
    font-family: Monsterrat, sans-serif;
   
    margin:5px;
`
export const Centering = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
`


export const SubmitButton = styled.button`

    text-align:center;
    display:inline-block;
    width:fit-content;
    border-radius:25px;
    padding: 5px 10px;
    font-family: Monsterrat, sans-serif;
    background: #A3BDA7;
    border:none;
    font-size:16px;
`
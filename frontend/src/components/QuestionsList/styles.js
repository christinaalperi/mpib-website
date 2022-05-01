import styled from 'styled-components'

export const Ques = styled.p`
    font-family: Monsterrat, sans-serif;
    font-weight:bold;
    font-size:20px;
`

export const Ans = styled.p`
    font-family: Monsterrat, sans-serif;

`

export const QuesAnsContainer = styled.div`
    display:flex;
    flex-direction:column;
    

`
export const QuesCont = styled.div`
    padding: 0px 5px;
    background:#A3BDA7;
    border-radius:30px;
`

export const QuestionListContainer = styled.div`
    display:flex;
    flex-direction:column;
    
    padding:0px 100px;
    @media only screen and (max-width: 800px) {
        margin-left: 10rem;
        margin-right:10rem;

    }
    @media only screen and (max-width: 600px) {
        margin-left: 5rem;
        margin-right:5rem;
    }
    
`


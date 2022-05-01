import React from 'react'
import { Ques, Ans, QuesAnsContainer, QuesCont } from './styles'
function Question(props) {
  return (
    <QuesAnsContainer>
     <QuesCont><Ques>{props.question}</Ques></QuesCont> 
      <Ans>{props.answer}</Ans>
    </QuesAnsContainer>

  )
}

export default Question
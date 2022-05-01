import React, { useState, useEffect } from 'react'
import Question from './Question'
import { db } from '../../base'
import {QuestionListContainer} from './styles'
function QuestionsList() {

  const [questions, setQuestions]=useState([]);
  const collection = db.collection("questions");

  useEffect(() => {
    collection.onSnapshot((snapshot) => {
      const data = []
      snapshot.docs.map(doc => {
        data.push( {
          id:doc.id,
          question:doc.data().question,
          answer:doc.data().answer,
        })
        
        
      })
      setQuestions(data)
      console.log(questions)
    });

  }, []);

  function createQuestion(q) {
    return (
        <Question question={q.question} answer={q.answer}></Question>
    );
  }

  return (
    <QuestionListContainer>
        {questions && questions.map(createQuestion)}
    </QuestionListContainer>
    
  )
}

export default QuestionsList
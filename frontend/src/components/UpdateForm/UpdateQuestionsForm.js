import React, {useState, useEffect} from 'react'
import { db } from '../../base';
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"; 
import { Heading, Body, FormElements, SubmitButton, Background, Centering } from './styles'

function UpdateQuestionsForm() {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [questions, setQuestions] = useState([{}])

    const questionsCollection = db.collection("questions");
  useEffect(()=>{
    questionsCollection.onSnapshot((snapshot)=>{
      const questionsData = [];
      snapshot.docs.map((doc)=>{
        questionsData.push({
          id: doc.id,
          question: doc.data().question,
          answer: doc.data().answer
        })
      })
      setQuestions(questionsData)
    })
  },[])


  const handleOnSubmit = (e) => {
    e.preventDefault();
    // iterate through the checkedState array and looked for the checked indices and then get the id of those items and then deleteDoc

    questions.forEach((el)=>{
      if(document.getElementById(el.question).checked==true){
        console.log(el.id);
        deleteDoc(doc(db,"questions",el.id)).then(()=>{
          alert("success")
        });
      }
      
    })
}

  return (
    <Body>
      <Centering><Background>
      <Heading>Add Question</Heading>
        <FormElements>
       
            <label>
                Question: <input type='text' value={question} onChange={(e)=>setQuestion(e.target.value)}/>
            </label>
            <label>
                Answer: <input type='text' value={answer} onChange={(e)=>setAnswer(e.target.value)}/>
            </label>
            <SubmitButton type='submit' value="Submit" onClick={(e)=>{
                e.preventDefault();
               if((question!=='')&&(answer!=='')){
                addDoc(collection(db, 'questions'), {
                    question: question, 
                    answer: answer
                })
               }
            }}>Submit</SubmitButton>
        
          </FormElements>
      </Background>
        
    <Background>
        
        <Heading>Delete Question(s)</Heading>
        <div>
      <ul style={{'listStyle':'none'}}>
      {questions.map((item, index)=>{
        
          return(
            <li key={index}>
              
              <label><input id={item.question} type="checkbox" name={item.question} value={item.question}/>{item.question}</label>
            </li>

          )
        })}
      </ul>
      <SubmitButton type="submit" value="Submit" onClick={(e)=>handleOnSubmit(e)}>Submit</SubmitButton>
    
      </div>
        </Background></Centering>
      
        

    </Body>
  )
}

export default UpdateQuestionsForm
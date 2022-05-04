import React, {useState, useEffect} from 'react'
import * as ReactDOM from 'react-dom';
import { db } from '../../base';
import PageHeader from '../PageHeader/PageHeader';
import Navbar from '../Navbar/Navbar';
import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { Heading, Body, FormElements, CommitteeButton, CommitteeButtonDiv, SubmitButton, Background, Centering } from './styles'


function UpdateCommitteeForm() {
    const [committees, setCommittees] = useState([{}])
    const [committeeName, setCommitteeName] = useState('');
    const [committeeContact, setCommiteeContact] = useState('');
    const [imgURL, setimgURL] = useState(null);
    const [committeeRole, setCommitteeRole] = useState('');
    const [newContact, setNewContact] = useState('');
    const [newDesc, setNewDesc] = useState('');
    const [updateInProgress, setUpdateInProgress] = useState(false);
    
    const committeeCollection = db.collection("committees");

   
  useEffect(()=>{
    committeeCollection.onSnapshot((snapshot)=>{
      const committeeData = [];
      snapshot.docs.map((doc)=>{
        committeeData.push({
          id: doc.id,
          name: doc.data().name,
          contact: doc.data().contact,
          role: doc.data().role
        })
      })
      setCommittees(committeeData)
      

    })
  }, [committees])

 

  const handleDeleteCommitteeClick = (e) => {
    e.preventDefault();
    deleteDoc(doc(db,"committees",e.target.value))
  }


  return (
    <div>
<PageHeader/>
        <Navbar/>
      <Body>
        
       <Centering> <Background>
         
        <Heading>Add Committee </Heading>
          
          <FormElements>
            <label>
              Name: <input id="addCommitteeName" type='text' value={committeeName} onChange={(e)=>{
                setCommitteeName(e.target.value);
                
                
                }}/>
            </label>
            <label>
              Contact: <input id='addCommitteeContact' type='text' value={committeeContact} onChange={(e)=>{
                setCommiteeContact(e.target.value);
                
                }}/>
            </label>
            <label>
              Role: <input id = 'addCommitteeRole' type='text' value={committeeRole} onChange={(e)=>{
                setCommitteeRole(e.target.value);
                
                }}/>
            </label>
            <label>
              Img: <input type='file' value={imgURL} onChange={(e)=>setimgURL(e.target.files[0])}/>
            </label>
            <SubmitButton type="submit" value="Submit" onClick={(e) => {
                e.preventDefault();
                
                if((committeeContact!='')&&(committeeName!='')&&(committeeRole!='')){
                  addDoc(collection(db, "committees"), {
                    contact: committeeContact,
                    imgURL: imgURL,
                    name: committeeName,
                    role: committeeRole
                  });
                }
                document.getElementById('addCommitteeName').value = '';
                document.getElementById('addCommitteeContact').value = '';
                document.getElementById('addCommitteeRole').value='';
              }}>Submit</SubmitButton>
          </FormElements>
        </Background>
          
        
              
              <Background>

                <Heading>Delete Committee</Heading>
                <CommitteeButtonDiv id="deleteCommitteButtons">
                  {committees.map((item, index)=>{
                    return(<CommitteeButton onClick={handleDeleteCommitteeClick} value={item.id}>{item.name}</CommitteeButton>)
                  })}
                </CommitteeButtonDiv>
                </Background>
              </Centering>
           
           
           
      </Body>
    </div>
    
    )
  
}

export default UpdateCommitteeForm
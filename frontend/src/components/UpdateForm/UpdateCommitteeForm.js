import React, {useState, useEffect} from 'react'
import { db } from '../../base';
import PageHeader from '../PageHeader/PageHeader';
import Navbar from '../Navbar/Navbar';
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"; 
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
    const [idToBeUpdated, setIdToBeUpdated] = useState('');


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
  },[])

 
  const handleUpdateCommitteeClick = (e) => {
    e.preventDefault();
    setUpdateInProgress(true);
    setCommitteeName(e.target.value);
    // iterate through committees to find ID of the one clicked, matching to its name 
    var oldID = ''
    committees.forEach((comm)=>{
      if(comm.name==e.target.value){
        setIdToBeUpdated(comm.id);
        oldID=comm.id;
      }
    });

    //console.log(e.target.value) is committee name that was clicked 
    var childNode = document.createElement('div');
    var committeeToUpdate = document.createElement('h4');
    var text = document.createTextNode(e.target.value);

    committeeToUpdate.appendChild(text);
    childNode.appendChild(committeeToUpdate);
   
    var form = document.createElement('form');
    var descInput = document.createElement('input');
    descInput.addEventListener("onChange", (e)=>{
      setNewDesc(e.target.value)
    })
    var descLabel = document.createTextNode('Description: ');
    var contactInput = document.createElement('input');
    contactInput.addEventListener("onChange", (e)=>{
      console.log(e.target.value)
    })
    
    var contactLabel = document.createTextNode('Contact: ');
    var submitButton = document.createElement('button');
    submitButton.textContent='Submit';
    submitButton.addEventListener("onClick", (e)=>{
      e.preventDefault();
      console.log(newContact)
      //updateDoc(doc(db,"committees",oldID),)
    });

    form.appendChild(contactLabel);
    form.appendChild(contactInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(descLabel);
    form.appendChild(descInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);

    childNode.appendChild(form);
    document.getElementById('committeeBody').appendChild(childNode)

    

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
                console.log('here')
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

              <Heading>Update Committee Information</Heading>
            <CommitteeButtonDiv id='committeeBody'>
            {committees.map((item, index)=>{
        
              return(                 
                  <CommitteeButton onClick={handleUpdateCommitteeClick} value={item.name} disabled={updateInProgress}>{item.name}</CommitteeButton>
              )
            })}
            </CommitteeButtonDiv>
              </Background></Centering>
           
           
            
      </Body>
    </div>
    
    )
  
}

export default UpdateCommitteeForm
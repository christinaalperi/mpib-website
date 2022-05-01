import React, { useState, useEffect } from 'react'
import { db } from "../../base";
import CommitteeCard from '../CommitteeCard/CommitteeCard';

// need to figure out how to import a refreshed updated version of the contact list saved in firebase 
import { CommitteeContainer, Background } from './styles';

 const CommitteeCardList =  () => {
   
  const [committees, setCommittees] = useState([{}]);

  const collection = db.collection("committees")
 
  useEffect(() => {
    collection.onSnapshot((snapshot) => {
      const data = []
      snapshot.docs.map(doc => {
        data.push( {
          id:doc.id,
          name:doc.data().name,
          role:doc.data().role,
          contact:doc.data().contact

        })
        
        
      })
      setCommittees(data)
      console.log(data)
    });
  }, []);


  function createCard(committee) {
    return (
        <Background><CommitteeCard name={committee.name} role={committee.role} contact={committee.contact}></CommitteeCard></Background>
    );
  }
  
  return (
    <>
    <CommitteeContainer> 
      {committees && committees.map(createCard)}
    </CommitteeContainer>
    
    </>
    
  )
}

export default CommitteeCardList
import React from 'react'
import { CommitteeName, CommitteeCardItem, CommitteeRole, CommitteeContact } from './styles';

function CommitteeCard(props) {
  return (
    <div>  
        <CommitteeCardItem>
            <CommitteeName>{props.name}</CommitteeName>
            <CommitteeContact>Chair: {props.contact}</CommitteeContact>
            <CommitteeRole>{props.role}</CommitteeRole>
         </CommitteeCardItem>
  </div>
  )
}

export default CommitteeCard
import React, { useContext } from 'react'
import { AuthContext } from '../../../AuthProvider';
import UpdateCommitteeForm from '../../../components/UpdateForm/UpdateCommitteeForm';

const CommitteeUpdate = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>{currentUser && <UpdateCommitteeForm/>}

    </div>
  )
}

export default CommitteeUpdate
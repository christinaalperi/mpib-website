import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PageHeader from '../../components/PageHeader/PageHeader'

import InstaFeed from '../../components/InstaFeed/InstaFeed'

function Photos() {

  return (
    <div>
        <PageHeader />
        <Navbar/>
        <InstaFeed token={process.env.REACT_APP_INS_TOKEN} limit={12}/>
    </div>
  )
}

export default Photos
import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PageHeader from '../../components/PageHeader/PageHeader'
const axios = require('axios');
//import InstaFeed from '../../components/InstaFeed/InstaFeed'
//
function Photos() {
  const [profileData, setProfileData] = useState([])
  useEffect(()=>{
    const igUsername = 'mphsibcouncil'
    const fetchData = async () => {
      const result = await axios.get('https://www.instagram.com/' + igUsername + '/?__a=1');
    }
    fetchData().then((res)=>console.log(res.data)).catch((err)=>console.log(err));
   
	//setProfileData(result.data);
  },[])
  return (
    <div>
        <PageHeader />
        <Navbar/>
        {(profileData!==[]) &&
        <p>See console for profileData</p>
        }
    </div>
  )
}

export default Photos
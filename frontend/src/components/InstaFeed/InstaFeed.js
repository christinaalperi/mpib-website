import React, {useState, useRef, useEffect} from 'react'
import Feed from './Feed'
import axios from 'axios'


const InstaFeed =({token, ...props}) => {
    const [feed, setFeed] = useState([]);
    const tokenProp = useRef(token);
    tokenProp.current = token;
    let url = `https://api.instagram.com/oauth/authorize?client_id=${process.env.REACT_APP_INS_APP_ID}&redirect_uri=${process.env.REACT_APP_INS_REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;
    
    useEffect(()=>{
      axios.get(url).then((res)=>{console.log(res)})
    },[])

  
  return (
    <div>
        InstaFeed
    </div>
  )
}

export default InstaFeed;
import React, {useState, useEffect} from 'react'
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"; 
import { Body, Heading, Centering, Background, SubmitButton, FormElements} from './styles'
import { storage, db } from '../../base'

const UpdatePhotosForm = () => {
    const [imageUpload, setImageUpload] = useState(null)
    const [photoURL, setPhotoURL] = useState('')
    const [imgList, setImgList] = useState([{}])
   
    const imgRef = storage.ref()
    const imgURLCollection = db.collection("photos");
  
    useEffect(()=>{
        const data = []
        imgURLCollection.onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                data.push({
                    id:doc.id,
                    url:doc.data().url,
                    name:doc.data().url.substring(92).split('?',1)[0]
                })
            })
            
            setImgList(data);
        })
    },[])

    const handleDelete = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        imgRef.child(`/images/${e.target.name}`).delete().then(()=>{
            deleteDoc(doc(db,"photos",e.target.value)).then(()=>{alert("success")})
        }).catch((err)=>console.log(err))
    }

    const uploadURL = (url) => {  
        addDoc(collection(db,'photos'),{
            url: url
        })   
    }
    const uploadImage = (e) => {
        e.preventDefault()
        if(imageUpload==null) return;
        const storageRef = storage.ref()
        const uploadTask = storageRef.child(`/images/${imageUpload.name}`).put(imageUpload)
        uploadTask.on('state_changed', 
            (snapshot)=>{
                console.log(snapshot)  
                
            }, 
            (err)=>{
                console.log(err)
            }, 
            ()=>{
            storage
                .ref("/images")
                .child(imageUpload.name)
                .getDownloadURL()
                .then((url)=>{
                    console.log(`File available at: ${url}`)
                    setPhotoURL(url);
                    uploadURL(url);
                    alert("success")
                });
            
            
        })
    }
  return (
    <Body>

        <Centering>
            <Background>
                <Heading>Add Images</Heading>
                <FormElements>
                   
                    <input type='file' onChange={(e)=>{setImageUpload(e.target.files[0])}}></input>
                    <SubmitButton onClick={(e)=>uploadImage(e)}>Upload Image</SubmitButton>
                   
                </FormElements>
                
            </Background>


            <Background>
                <Heading>
                    Delete Images
                </Heading>
                 <div>
                    <ul style={{'listStyle':'none'}}>
                    
                    {imgList.map((item, index)=>{
                              
                                return(
                                    <li key={index}>
                                    
                                    <label><button onClick={(e)=>handleDelete(e)} name={item.name} value={item.id}>{item.name}</button></label>
                                    </li>
                                )
                            
                        
                        })}
                    
                    
                        
                    </ul>
                    
                    
                    </div>
            </Background>
        </Centering>
    </Body>
  )
}

export default UpdatePhotosForm
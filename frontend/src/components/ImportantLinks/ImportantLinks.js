import React, {useEffect, useState} from 'react'
import { db } from '../../base'
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"; 

import { Background, Centering, Heading, LinkElement, Hyperlink } from './styles'


const ImportantLinks = () => {
    const [links, setLinks] = useState([{}])
    const linksCollection = db.collection("links");
    useEffect(()=>{
        linksCollection.onSnapshot((snapshot)=>{
            const data = [];
            snapshot.docs.map((doc)=>{
                data.push({
                    id: doc.id,
                    url: doc.data().url,
                    linkedTo: doc.data().linkedTo
                })
            })
            setLinks(data)
        })
    },[links])

  return (
    <div>
        <Centering>
            <Background>
                <Heading>Important Links</Heading>
                <div>
                    {links.map((l, idx)=>{
                        return(<LinkElement><Hyperlink href={l.url}  target="_blank">{l.linkedTo}</Hyperlink></LinkElement>)
                    })}
                </div>
            </Background>
        </Centering>

    </div>
  )
}

export default ImportantLinks
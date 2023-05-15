import React from 'react'
import Style from '../styles/comment.module.css'
import { useState } from 'react'
import Home from './home'

const comment = ({comments}) => {
    const [show,setShow] = useState(false) 
  return (
    <div>
        {
            comments.map((c,i)=>(
                <div key={i}>
                    <p>{c}</p>
                    <button onClick={()=>setShow(true)}>add comment</button>
                    {show && <Home/>}
                </div>
            ))
        }
    </div>
  )
}

export default comment
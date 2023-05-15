import React from 'react'
import { useState } from 'react'
import Comment from './comment'
import Style from '../styles/home.module.css'

// let comments = [
//   {
//     "desc":"this is life anything is unpredictable",
//      upvotes:5,
//      downvotes:3,
//      "comm":[
//       {
//         "desci":"this is life ",
//         upvotes:5,
//         downvotes:3,
//       },
//       {
//         "desci":"this is life ",
//         upvotes:5,
//         downvotes:3,
//       },
      
//      ] 
//   }
// ]



const home = () => {
  const[val,setVal] = useState([])
  const [data,setData] = useState("")

  const addData =(e)=>{
    const cur = [...val,data]
    setVal(cur);
    setData("")
}
  return (
    <div> 
      <input type="input" value={data} onChange={(e)=>setData(e.target.value)}></input>
      <button onClick={addData}>add</button>
       <Comment comments={val}/>
    </div>
  )
}

export default home
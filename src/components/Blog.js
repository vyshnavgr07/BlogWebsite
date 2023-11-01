import React, { useContext } from 'react'
import { BlogeContext } from '../App'
import { useParams } from 'react-router-dom'
const Blog = () => {
  const {post}=useContext(BlogeContext)
  const {id}=useParams()
  const find=post.find((item)=>item.id===parseInt(id))
  

  return (
    <div>
       
        <div className='shadow p-3 mb-5 bg-secondary rounded mt-5 ' >
     
      
      <h1>{find.title}</h1>
      <h1>{find.body}</h1>
      
        </div>
      
        
        </div>
  )
}

export default Blog
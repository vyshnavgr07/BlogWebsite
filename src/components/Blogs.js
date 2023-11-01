import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BlogeContext } from '../App'
import "./Blogs.css"
import { Button } from 'react-bootstrap'


const Blogs = () => {
  const {post}=useContext(BlogeContext);
  
  console.log(post);
  return (
    <div className='main' >
      <h1>Titles</h1>
     
      {post.map((item)=>(
        <div className='border border-dark mt-3 rounded' >
           <Link style={{textDecoration:"none"}} to={`/blog/${item.id}`}>

        <h1><a> {item.title}  </a></h1> 
           </Link>
       
         </div>
      ))}


          <Link to={"/"}>  <Button  className='mainbtn'>Add new item</Button>  </Link>

       </div>


  )
}

export default Blogs
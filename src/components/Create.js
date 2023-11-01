import React, { useContext, useRef, useState } from 'react'
import {Navbar,Container,Button } from 'react-bootstrap';

import "./Create.css"
import { Link } from 'react-router-dom'
import { BlogeContext } from '../App';
import { toast } from 'react-toastify';
const Create = () => {
const {post,setPost}=useContext(BlogeContext);
const title=useRef({});
const body =useRef({});
const handleChange=()=>{
  if (title.current.value=== ""&&body.current.value==="") {
    toast.error("Please input the task");
    return;
    }
  const NewTitle=title.current.value;
  const NewBody =body.current.value
  const value ={title:NewTitle,body:NewBody,id:Date.now()}
  setPost([...post,value])
}

  return (
    <div  >
        <>
      <Navbar className="bg-secondary">
      <Container>
        <Navbar.Brand href="#home"><span id="b"><i>Blog</i></span></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          Pen your Thought:<span>Here</span> 
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>




    <Container className='shadow p-3 mb-5 bg-white rounded mt-5' >
  
    <div className='input1'>
        <h1><i>Subject</i></h1>
    <input type='text' ref={title}/>
     
    </div>
    <div className='input2'>
    <h1><i>BlogSpot</i></h1>
    <textarea placeholder='writeHere'  ref={body}/>
     </div>
     </Container>

     <Link to="blogs">   <Button variant="danger" id="btn" onClick={handleChange}>Save</Button>  </Link>
     
    


</div>
  )
}

export default Create

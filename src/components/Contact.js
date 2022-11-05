
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import Footer from "./Footer";
const Contact = () =>{
  let navigate = useNavigate();
  
  const [firstname, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("Send me a message and I'll reply as soon as possible")

const handleSubmit = (e) =>{
  e.preventDefault()
  if(firstname && lastName && email && message){
   alert("Submitted Successfully")
  }else{
  alert("Error try again later")
  }
  
setMessage("");
  setLastName("");
  setFirstName("");
  setEmail("");
}

  return(
    <main  className="contact container-fluid">
    <section className="p-3">
    
    <div className="pt-5">
    <h1 id="contact-title">Contact Me</h1>
    <p id="text-title">Hi there, contact me to ask anything you have in mind.</p>
    </div>
  
    <form onSubmit={handleSubmit}>
    <div className="row g-3">
    <div className="col-auto">
    <label htmlFor="first_name" className="form-label">First name</label>
    <input type="text" id="first_name" placeholder="Enter your first name" className="form-control form-control-lg" value= {firstname} onChange={(e) => setFirstName(e.target.value)}/>
    </div>
    
    <div className="col-auto">
    <label htmlFor="last_name" className="form-label">Last name</label>
    <input type="text" id="last_name" placeholder="Enter your last name" className="form-control form-control-lg" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
    </div>
    </div>
    
    <div className="mt-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" id="email" placeholder="yourname@email.com" className="form-control form-control-lg" value={email} onChange={(e)=> setEmail(e.target.value)}/>
    </div>
    
    <div className="mb-3">
    <label htmlFor="message" className="form-label mt-3"> Message</label>
    <textarea type="text" id="message" className="form-control" onChange={(e)=> setMessage(e.target.value)}>{message}</textarea>
    </div>
    
    <div>
    <input type="checkbox" className="me-2 form-check-input"/>
    <label className= "form-check-label">You agree to providing your data to Uwabunkeonye Ijeoma who may contact you</label>
    </div>
    
    <div className="d-grid mt-3">
    <button id="btn__submit" type="submit" className="btn btn-primary">Send message</button>
    </div>
    </form>
    </section>
  <button onClick={()=> {navigate("/")}} type="button" className="btn1">Homepage</button>
    <Footer/>

    </main>
    )
}

export default Contact
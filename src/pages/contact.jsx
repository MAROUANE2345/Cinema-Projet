import { useState } from "react";
import './contact.css'
export default function Contact() {

   const [nom,setNom] = useState("")
   const [email,setEmail] = useState("")
   const [message,setMessage] = useState("")

   const [success,setSuccess] = useState("")
   const [nomErreur,setNomErreur] = useState('')
   const [emailErreur,setEmailErreur] = useState('')
   const [messageErreur,setMessageErreur] = useState('')
   const getName = (event) => {
    setNom(event.target.value)
   }

   const getEmail = (event) => {
    setEmail(event.target.value)
   }

   const getMessage = (event) => {
    setMessage(event.target.value)
   }
   const sendMessage = () => {
     let youCanSend = true
      if(!nom.trim()){
        setNomErreur("you have to enter the name")
        youCanSend = false
      }else{
        setNomErreur("")
      }
      if(!email.includes("@")){
        setEmailErreur("the email must be valid")
        youCanSend = false
      }else{
        setEmailErreur("")
      }
      if(!message.trim()){
        setMessageErreur('you have to enter the message')
        youCanSend = false
      }else{
        setMessageErreur("")
      }
      if(youCanSend){
        setSuccess("Message sent successfully!")
        setNom("")
        setEmail("")
        setMessage("")
      }
   }
  return (
<div className="contact">
  
 <div className="contact-container">
    <label>Nom: </label>
    <input type="text" onChange={(event) => getName(event)}  />

    <p>{nomErreur}</p>

    <label htmlFor="">Email</label>
    <input type="email" onChange={(event) => getEmail(event)}  />

    <p>{emailErreur}</p>

    <label htmlFor="" >Message</label>
    <textarea onChange={(event) => getMessage(event)}></textarea>

    <p>{messageErreur}</p>

  </div>
<div className="msg-btn-div">
   <button onClick={() => sendMessage()} className="msg-btn">Send Message</button>
  <p>{success}</p>
</div>
  
</div>
  );
}

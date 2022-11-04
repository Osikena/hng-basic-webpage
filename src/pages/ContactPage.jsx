import 'bootstrap/dist/css/bootstrap.min.css'
import '../pagescss/ContactPage.css'
import '../pagesresponsivecss/ContactPageResponsive.css'
import { useState } from 'react'

function ContactPage() {
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [messageError, setMessageError] = useState('')
  const [checkError, setCheckError] = useState(false)
  
  const [firstNameClick, setFirstNameClick] = useState(false)
  const [lastNameClick, setLastNameClick] = useState(false)
  const [emailClick, setEmailClick] = useState(false)
  const [messageClick, setMessageClick] = useState(false)
  const [checkClick, setCheckClick] = useState(false)

  function onInputFirstName(value){
    setFirstName(value);
    if(value === ''){
      setFirstNameError('Please enter your first name');
      setFirstNameClick(true);
    }else{
      setFirstNameError('');
      setFirstNameClick(false);
    }
  }

  function onInputLastName(value){
    setLastName(value);
    if(value === ''){
      setLastNameError('Please enter your last name');
      setLastNameClick(true);
    }else{
      setLastNameError('');
      setLastNameClick(false);
    }
  }

  function onInputEmailName(value){
    setEmail(value);
    if(value === ''){
      setEmailError('Please enter a valid email');
      setEmailClick(true);
    }else{
      setEmailError('');
      setEmailClick(false);
    }
  }
  
  function onInputMessageName(value){
    setMessage(value);
    if(value === ''){
      setMessageError('Please enter a message');
      setMessageClick(true);
    }else{
      setMessageError('');
      setMessageClick(false);
    }
  }

  function onChangeCheckBox(value){
    if(value){
      setCheckError(value);
      setCheckClick(false);
    }else{
      setCheckError(value);
      setCheckClick(true);
    }
  }
  
  function onSubmit(){
    if(firstName === ''){
      setFirstNameError('Please enter your first name');
      setFirstNameClick(true);
    }else if(lastName === ''){
      setLastNameError('Please enter your last name');
      setLastNameClick(true);
    }else if(email === ''){
      setEmailError('Please enter a valid email');
      setEmailClick(true);
    }else if(message === ''){
      setMessageError('Please enter a message');
      setMessageClick(true);
    }else if(checkError === false){
      setCheckClick(true);
    }else{
      alert("Form submitted successfully");
    }
    
  }
  
  return (
    <div className="container-fluid" id='ContactPage-main-container'>

      <div className="container-fluid" id='ContactPage-sub-container'>
        <h4 id='ContactPage-main-text'>Contact Me</h4>
        <h6 id='ContactPage-sub-text'>Hi there, contact me to ask me about anything you have in mind.</h6>
      </div>
      

      <div id='ContactPage-form-div-1'>

        <div id='ContactPage-form-div-1-sub-1'>
          <label htmlFor="first_name" id='first_name_label'>First name</label> <br />
          <input type="text" placeholder='Enter your first name' id='first_name' className={firstNameClick? 'first_name_error' : 'first_name_ok'}
          value={firstName} onInput={e => onInputFirstName(e.target.value)}  /> <br />
          <h6 id='wrong_input'>{firstNameError}</h6>
        </div>

        <div id='ContactPage-form-div-1-sub-2'>
          <label htmlFor="last_name" id='last_name_label'>Last name</label> <br />
          <input type="text" placeholder='Enter your last name' id='last_name' className={lastNameClick? 'last_name_error' : 'last_name_ok'}
          value={lastName} onInput={e => onInputLastName(e.target.value)} /> <br />
          <h6 id='wrong_input'>{lastNameError}</h6>
        </div>
        
      </div>

      <div id='ContactPage-form-div-2'>

        <div id='ContactPage-form-div-2-sub'>
          <label htmlFor="email" id='email_label'>Email</label> <br />
          <input type="email" placeholder='yourname@email.com' id='email' className={emailClick? 'email_error' : 'email_ok'}
          value={email} onInput={e => onInputEmailName(e.target.value)} /> <br />
          <h6 id='wrong_input'>{emailError}</h6>
        </div>
        
      </div>

      <div id='ContactPage-form-div-3'>

        <div id='ContactPage-form-div-3-sub'>
          <label htmlFor="message" id='message_label'>Message</label> <br />
          <textarea rows="4" cols="50" placeholder="Send me a message and I'll reply you as soon as possible..." id='message' 
          value={message} onInput={e => onInputMessageName(e.target.value)} className={messageClick? 'message_error' : 'message_ok'} />  <br />
          <h6 id='wrong_input'>{messageError}</h6>
        </div>
        
      </div>

      <div id='ContactPage-form-div-4'>

        <input type="checkbox" id='check_box' value={checkError} onChange={e => onChangeCheckBox(e.target.checked)} 
        className={checkClick? 'check_box_error' : 'check_box_ok'} />
        <label htmlFor="check_box" id='check_box_label'>You agree to providing your data to Oskiena who may contact you.</label>
        
      </div>

      <div id='ContactPage-form-div-5'>
        
        <button id='btn__submit' onClick={onSubmit}>Send message</button>
        
      </div>
      
      
      
    </div>
  )
}

export default ContactPage

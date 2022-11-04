import 'bootstrap/dist/css/bootstrap.min.css'
import '../pagescss/ContactPage.css'
import '../pagesresponsivecss/ContactPageResponsive.css'

function ContactPage() {
  return (
    <div className="container-fluid" id='ContactPage-main-container'>

      <div className="container-fluid" id='ContactPage-sub-container'>
        <h4 id='ContactPage-main-text'>Contact Me</h4>
        <h6 id='ContactPage-sub-text'>Hi there, contact me to ask me about anything you have in mind.</h6>
      </div>

      <form id='ContactPage-form'>

        <div id='ContactPage-form-div-1'>

          <div id='ContactPage-form-div-1-sub-1'>
            <label htmlFor="first_name" id='first_name_label'>First name</label> <br />
            <input type="text" placeholder='Enter your first name' id='first_name' />
          </div>

          <div id='ContactPage-form-div-1-sub-2'>
            <label htmlFor="last_name" id='last_name_label'>Last name</label> <br />
            <input type="text" placeholder='Enter your last name' id='last_name' />
          </div>
          
        </div>

        <div id='ContactPage-form-div-2'>

          <div id='ContactPage-form-div-2-sub'>
            <label htmlFor="email" id='email_label'>Email</label> <br />
            <input type="email" placeholder='yourname@email.com' id='email' />
          </div>
          
        </div>

        <div id='ContactPage-form-div-3'>

          <div id='ContactPage-form-div-3-sub'>
            <label htmlFor="message" id='message_label'>Message</label> <br />
            <textarea rows="4" cols="50" placeholder='Send me a message and Ill reply you as soon as possible...' id='message' />
          </div>
          
        </div>

        <div id='ContactPage-form-div-4'>

          <input type="checkbox" id='check_box'/>
          <label htmlFor="check_box" id='check_box_label'>You agree to providing your data to name who may contact you.</label>
          
        </div>

        <div id='ContactPage-form-div-5'>
          
          <button id='btn__submit'>Send message</button>
          
        </div>
        
      </form>
      
    </div>
  )
}

export default ContactPage

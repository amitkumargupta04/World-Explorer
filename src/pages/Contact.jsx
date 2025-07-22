import React from 'react'

function Contact() {

  const handleFormSubmit = (formData) =>{ // ready for sending data to bavkend engineer
    //console.log(formData); 
    const formInputData = Object.fromEntries(formData.entries());
    //console.log(formInputData);
  }
  return (
    <section className='section-contact'>
      <h2 className='container-title'>Contact Us</h2>
      <div className='contact-wrapper container'>
        <form action={handleFormSubmit}>
          <input className='form-control'
           type='text'
           placeholder='enter username'
           required
           autoComplete='false'
           name='username'
         />
          <input className='form-control'
           type='email'
           placeholder='abc@gmail.com'
           required
           autoComplete='false'
           name='email'
          /> 
          <textarea className='form-control'
           rows="10"
           placeholder='enter your message'
           name='message'
           required
           autoComplete='false'
         />
         <button type='submit' value="send">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
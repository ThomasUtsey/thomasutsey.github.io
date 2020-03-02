
import React from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import axios from 'axios'


class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user_name:'',
      user_email:'',
      message:''
    }
  }
 

  sendEmail=(e)=> {
    e.preventDefault();
    console.log(e)

    const data = {
      service_id: 'default_service',
      template_id: 'template_4XZrIpKt',
      user_id: 'user_WbeUYLO8TMaKH3hBSVqbe',
      template_params:{
        to_name: 'Thomas',
        email:this.state.user_email,
        from_name:this.state.user_name,
        message_html:this.state.message
      }
    }

   
  emailjs.send('gmail', 'template_4XZrIpKt', data.template_params,'user_WbeUYLO8TMaKH3hBSVqbe')
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });
    
    };
      handleChange  = (event) => {
          const { target: { name, value } } = event
          this.setState({ [name]: value, event: event })
        }
        
    

  render(){return (
    
    <form className="contact-form" onSubmit={this.sendEmail}>
      <h3>Contact me via Email</h3>
      <input type="hidden"  name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" value={this.state.user_name} onChange={this.handleChange} />
      <label>Email</label>
      <input type="email" name="user_email" value={this.state.user_email} onChange={this.handleChange} />
      <label>Message</label>
      <textarea className='message' name="message" value={this.state.message} onChange={this.handleChange}/>
      <input className='button' type="submit" value="Send" />
    </form>
  )
  }
}
export default Contact

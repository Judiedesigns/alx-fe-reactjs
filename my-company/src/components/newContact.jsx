  import { useState } from 'react';

   function NewContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
       e.preventDefault();
       console.log({ name, email, message });
       setEmail('')
       setName('')
       setMessage('')
    }

     return (
       <div style={{ padding: '20px', textAlign: 'center' }}>
         <h1>Contact Us</h1>
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="name"
             value={name}
             placeholder="Your Name"
             onChange={(e) => setName(e.target.value) }
             style={{ display: 'block', margin: '10px auto' }}
           />
           <input
             type="email"
             name="email"
             value={email}
             placeholder="Your Email"
             onChange={(e) => setEmail(e.target.value)}
             style={{ display: 'block', margin: '10px auto' }}
           />
           <textarea
            value={message}
             onChange={(e) => setMessage(e.target.value)}
             name="message"
             placeholder="Your Message"
             style={{ display: 'block', margin: '10px auto' }}
           />
           <button type="submit">Send Message</button>
         </form>
       </div>
     );
   }

   export default NewContact;
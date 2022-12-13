import React, { FC, useState, FormEventHandler,SyntheticEvent} from "react";

interface formProps {
    setDisplay: (display: string) => void;
}

const contact: FC<formProps> = ({setDisplay}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const time = new Date().toLocaleDateString();

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if(!name || !email || !number || !message) {
        alert('Please fill all the fields')
    }
    setDisplay('blog')
    console.log(name, email, number, message, time);
   setName('')
   setEmail('')
   setNumber('')
   setMessage('')

  };

  return (
    <div className="contact-container">
      <div className="contact-header">CONTECT ME</div>
      <div className="contact-form">
        <form className="form" onSubmit={onSubmit}>
          <label htmlFor="name">
            <p>Name : </p>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            <p>Email : </p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="number">
            <p>Number : </p>
            <input
              type="text"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>
          <label htmlFor="message">
            <p >message : </p>
            <input
                id = 'message'
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default contact;

import React from 'react'

const Contact = () => {
  return (
    <section className="authentication">
      <form>
        <div className="card formCard formCard--large">
          <h3 className="card__title">CONTACT US</h3>
          <div className="formGroup">
            <label htmlFor="name" className="formGroup__label">Name</label>
            <input type="text" id="name" className="input--grey" placeholder="Your name" required />
          </div>
          <div className="formGroup">
            <label htmlFor="name" className="formGroup__label">Last name</label>
            <input type="text" id="name" className="input--grey" placeholder="Your lastname" required />
          </div>
          <div className="formGroup">
            <label htmlFor="emailAddress" className="formGroup__label">Email address</label>
            <input type="email" id="emailAddress" className="input--grey" placeholder="you@example.com" required />
          </div>
          <div className="formGroup">
            <label htmlFor="message" className="formGroup__label">Message</label>
            <textarea className="textarea--grey" name="message" id="message"></textarea>
          </div>
          <button className="button button--lightBlue" type="submit">Login</button>
        </div>
      </form>
    </section>
  )
}

export default Contact;

import React from 'react';

const Register = () => {
  return (
    <section className="authentication">
      <form>
        <div className="card formCard">
          <h3 className="card__title">CREATE YOUR ACCOUNT!</h3>
          <div className="formGroup">
            <label htmlFor="yourName" className="formGroup__label">Your name</label>
            <input type="text" id="yourName" className="input--grey" placeholder="Your name" required />
          </div>
          <div className="formGroup">
            <label htmlFor="emailAddress" className="formGroup__label">Email address</label>
            <input type="email" id="emailAddress" className="input--grey" placeholder="you@example.com" required />
          </div>
          <div className="formGroup">
            <label htmlFor="password" className="formGroup__label">Password</label>
            <input type="password" id="password" className="input--grey" placeholder="••••••••" required/>
          </div>
          <div className="formGroup">
            <label htmlFor="confirmPassword" className="formGroup__label">Confirm password</label>
            <input type="password" id="confirmPassword" className="input--grey" placeholder="••••••••" required />
          </div>
          <button className="button button--purple" type="submit">Sign up</button>
        </div>
      </form>
    </section>
  )
}

export default Register;
import React from 'react';

const Login = () => {
  return (
    <section className="authentication">
      <form>
        <div className="card formCard">
          <h3 className="card__title">LOG INTO YOUR ACCOUNT</h3>
          <div className="formGroup">
            <label for="emailAddress" className="formGroup__label">Email address</label>
            <input type="email" id="emailAddress" className="input--grey" placeholder="you@example.com" required />
          </div>
          <div className="formGroup">
            <label for="password" className="formGroup__label">Password</label>
            <input type="password" id="password" className="input--grey" placeholder="••••••••" required />
          </div>
          <button className="button button--lightBlue" type="submit">Login</button>
        </div>
      </form>
    </section>
  )
}

export default Login;
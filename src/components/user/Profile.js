import React from 'react';

const Profile = () => {
  return (
    <section className="profile">
      <form>
        <div className="card profileCard">
          <div className="profileCard__top">
            <h3 className="card__title">YOUR ACCOUNT SETTINGS</h3>
            <div className="formGroup">
              <label htmlFor="name" className="formGroup__label">Name</label>
              <input type="text" id="name" className="input--grey" placeholder="Your Name" />
            </div>
            <div className="formGroup">
              <label htmlFor="emailAddress" className="formGroup__label">Email address</label>
              <input type="email" id="emailAddress" className="input--grey" placeholder="you@example.com" />
            </div>
            <div className="formGroup photoUpload">
              <img className="photoUpload__userPhoto" src="https://www.thelocal.se/userdata/images/article/6d67730d16af04f3f956389d4cc244af808b8381c23b1e3d218ecd792de14fa8.jpg" alt="" />
              <input className="photoUpload__upload" type="file" accept="image/*" id="photo" name="photo" />
              <label htmlFor="photo">Choose new photo</label>
            </div>
            <button className="button button--purple" type="submit">Save Settings</button>
          </div>
          <div className="profileCard__bottom">
            <h3 className="card__title">PASSWORD CHANGE</h3>
            <div className="formGroup">
              <label htmlFor="confirmPassword" className="formGroup__label">Current password</label>
              <input type="password" id="currentPassword" className="input--grey" placeholder="••••••••" />
            </div>
            <div className="formGroup">
              <label htmlFor="confirmPassword" className="formGroup__label">New password</label>
              <input type="password" id="newPassword" className="input--grey" placeholder="••••••••" />
            </div>
            <div className="formGroup">
              <label htmlFor="confirmPassword" className="formGroup__label">Confirm password</label>
              <input type="password" id="confirmPassword" className="input--grey" placeholder="••••••••" />
            </div>
            <button className="button button--purple" type="submit">Save Password</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Profile;
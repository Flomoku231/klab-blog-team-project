import React, { useState } from 'react'
import '../Styles/Component-styles/LostPassword.css'

const LostPassword = () => {
    const[removeLostPassword, setRemoveLostPassword] = useState(false)

    const removePasswordForm =()=>{
        setRemoveLostPassword(!removeLostPassword)
    }
  return (
    <div className={`lostPassword__container ${removeLostPassword ? 'lostPassword__popup--remove': ''}`} >
         <div className="login__popup--overlay"></div>
    <div className="lostPassword__content">
            <div className="lostPassword--cancelMe">
                <button className='cancel--button' onClick={removePasswordForm} >X</button>
            </div>
            <div className="lostPassword__headers">
                <h1>Lost Password?</h1>
                <p>Enter your email address and we'll send you a link you can use to pick a new password.</p>
            </div>
        <form action="" className="lostPassword__form">
            <div className="lostPassword__name">
                <label htmlFor="lostPassword__nameInput">Username</label>
                <input type="text" name="" id="lostPassword__nameInput" />
            </div>
            <button className="newPassword__button">Get New Password</button>
        </form>
    </div>
    </div>
  )
}

export default LostPassword
import React from 'react'
import '../Styles/Component-styles/CreateAccount.css'
import '../Styles/Component-styles/AccountLogin.css'
import { useState } from 'react'




export const CreateAccount = () => {
    const [removePopup, setRemovePopup] = useState(false)

    const removeAccountPopup = ()=>{
        setRemovePopup(!removePopup)
    }
  return (
    <div className={`CreateAccount--container ${removePopup ? 'login__popup--remove': '' }`}>
         <div className="login__popup--overlay"></div>
        <div className="createAccount--content">
            <div className="createAccount--cancelMe">
                <button className='cancel--button' onClick={removeAccountPopup}>X</button>
            </div>
            <div className="createAccount__headers">
                <h1>Create Account</h1>
                <p>It takes less than a minute. If you already have an account login.</p>
            </div>
            <form action="" className="Cform">
                <div className="createAccount__name">
                    <label htmlFor="create__nameInput">Username</label>
                    <input type="text" name="" id="create__nameInput" />
                </div>
                <div className="createAccount__email">
                    <label htmlFor="create__emailInput">Email</label>
                    <input type="email" name="" id="create__emailInput" />
                </div>
                <div className="createAccount__names">
                    <div className="firstName">
                        <label htmlFor="create__fNameInput">First Name</label>
                        <input type="text" name="" id="create__fNameInput" />
                    </div>
                    <div className="lastName">
                        <label htmlFor="create__lNameInput">Last Name</label>
                        <input type="text" name="" id="create__lNameInput" />
                    </div>
                </div>
                <div className="createAccount__mobile">
                    <label htmlFor="create__mobileInput">Mobile</label>
                    <input type="text" name="" id="create__mobileInput" />
                </div>
                <div className="createAccount__password">
                    <div className="password">
                        <label htmlFor="create__passwordInput">Password</label>
                        <input type="password" name="" id="create__PasswordInput" />
                    </div>
                    <div className="passwordAgain">
                        <label htmlFor="create__passwordAgainInput">Password Again</label>
                        <input type="password" name="" id="create__passwordAgainInput" />
                    </div>
                </div>
                <div className="acceptTerms">
                        <label htmlFor="create__acceptTermsInput">I accept the Terms & Conditions</label>
                        <input type="checkbox" name="" id="create__acceptTermsInput" />
                    </div>
                <button className="registration__button">Register</button>
            </form>
        </div>
    </div>
  )
}

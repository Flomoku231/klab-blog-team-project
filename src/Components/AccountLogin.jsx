import React from 'react'
import { useState } from 'react'
import { CreateAccount } from './CreateAccount'
import LostPassword from './LostPassword'
import { Link } from 'react-router-dom'
import '../Styles/Component-styles/AccountLogin.css'


export const AccountLogin = ()=>{
    const [closePopup, setClosePopup] = useState(false)
    const [login, setLogin] = useState('loginDisplay')
    const [modalActive, setModalActive] = useState('Login')

    const DisplayCreateAccount = ()=>{
        setModalActive('createAccount')
        setLogin(!login)
    }
    const DisplayLostPassword = ()=>{
        setModalActive('lostPasword')
        setLogin(!login)
    }

    const CloseMe = ()=>{
        setClosePopup(!closePopup)
    }


    return(
        <>
        
        {
            login === 'loginDisplay' && <div className={`login__popup--container ${closePopup ? 'login__popup--remove': ''}`}>
                <div className="login__popup--overlay"></div>
        <div className="login__popup--content">
           <div className="login__popup--button">
                <button className='cancel--button' onClick={CloseMe}>X</button>
            </div>
            <div className="login__popup--header">

                <h1>Login</h1>
                <p>Don't have an account? <a href='#' onClick={DisplayCreateAccount}>Create your account</a>, it takes less than a minute.</p>
            </div>
            <form action="" className="login__popup--form">
                <div className="popup__form--name">
                    <label htmlFor="name__input">Username (use: agent)</label>
                    <input type="text" id='name__input' />
                </div>
                <div className="popup__form--password">
                    <label htmlFor="password__input">Password (use: agent)</label>
                    <input type="password" id='password__input' />
                </div>
                <button className="login__submit--btn">Login</button>
                <hr />
            </form>
            <div className="login__options">
                <button className="facebook__login">
                    <p>LOGIN WITH FACEBOOK</p>
                </button>
                <button className="google__login">
                    <p>LOGIN WITH GOOGLE</p>
                </button>
            </div>
            <button className="lostPassword--btn">
                <a href='#' onClick={DisplayLostPassword}>Lost your password?</a>
            </button>
            </div>
            </div>
        }
           {
            modalActive === 'createAccount' &&  <div className="createAccount__form">
            <CreateAccount/> </div>
        }
        {
            modalActive === 'lostPasword' && <div className="lostPassword__form">
            <LostPassword/> </div>
        }
       
        </>
    )
}


// import React from 'react'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import '../Styles/Component-styles/AccountLogin.css'
// import { CreateAccount } from './CreateAccount'
// import LostPassword from './LostPassword'

// export const AccountLogin = ()=>{
//     const [closePopup, setClosePopup] = useState(false);
//     const [modalActive, setModalActive] = useState('Login')

//     const DisplayCreateAccount = ()=>{
//         setModalActive('createAccount')
//     }
//     const DisplayLostPassword = ()=>{
//         setModalActive('lostPasword')
//     }
//     const CloseMe = ()=>{
//         setClosePopup(!closePopup)
//     }
//     const DisplayLost =()=>{
//         setLogin('Lost')
//     }

//     return(
        
//         <>
//         {
//             modalActive === 'Login' && <div className={`login__popup--container ${closePopup ? 'login__popup--remove': ''}`}>
//             <div className="login__popup--overlay"></div>
//            <div className="login__popup--overlay"></div>
//         {
//             login === 'loginDisplay' && <div className={`login__popup--container ${closePopup ? 'login__popup--remove': ''}`}>
//         <div className="login__popup--content">
//             <div className="login__popup--button">
//             <Link to={'/'}><IoMdClose style={{marginLeft: "-3%", marginTop: "4%", fontSize: "22px", cursor: "pointer", position: "absolute", color: "black"}}/></Link>
//             </div>
//             <div className="login__popup--header">
//                 <h1>Login</h1>
//                 <p>Don't have an account? <span><a href="#" onClick={DisplayCreateAccount}>Create your account</a></span>, it takes less than a minute.</p>
//                 <p>Don't have an account? <a href='#' onClick={DisplayCreateAccount}>Create your account</a>, it takes less than a minute.</p>
//             </div>
//             <form action="" className="login__popup--form">
//                 <div className="popup__form--name">
//                     <label htmlFor="name__input">Username (use: agent)</label>
//                     <input type="text" id='name__input' />
//                 </div>
//                 <div className="popup__form--password">
//                     <label htmlFor="password__input">Password (use: agent)</label>
//                     <input type="password" id='password__input' />
//                 </div>
//                 <button className="login__submit--btn">Login</button>
//                 <hr />
//             </form>
//             <div className="login__options">
//                 <button className="facebook__login">
//                     <p>LOGIN WITH FACEBOOK</p>
//                 </button>
//                 <button className="google__login">
//                     <p>LOGIN WITH GOOGLE</p>
//                 </button>
//             </div>
//             <button className="lostPassword--btn" onClick={DisplayLostPassword}>
//                 Lost your password?
//             </button>
//             </div>
//         </div>
//         }
//         {
//             modalActive === 'createAccount' &&  <div className="createAccount__form">
//             <CreateAccount/> </div>
//         }
//         {
//             modalActive === 'lostPasword' && <div className="lostPassword__form">
//             <LostPassword/> </div>
//         }
//        </>
//     )

// }
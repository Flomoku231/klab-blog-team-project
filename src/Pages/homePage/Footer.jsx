import React from 'react'
import '../../Styles/Pages-styles/homePage/footer.css'

export const Footer = () => {
  return (
    <div className='footer__container'>
        <div className="footer__head">
            <ul className="footer__items--list">
                <li>Our Properties</li>
                <li>MlS Search</li>
                <li>Communiteis</li>
                <li>News</li>
                <li>Services</li>
                <li>About Blair</li>
                <li>Contact</li>
            </ul>
            <div className="footer__copyright">
                <p>© 2023 WP Pro Real Estate 7 Premium WordPress Theme, All Rights Reserved. Back to top</p>
            </div>
        </div>
        <div className="footer__bottom">
            <p> San Diego Multiple Listing Service Inc. - Powered by RealtyWatch Solutions</p>
        </div>
    </div>
  )
}

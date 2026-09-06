// import React from 'react'
// import './Footer.css'
// import { assets } from '../../assets/assets'

// const Footer = () => {
//   return (
//     <div className='footer' id='footer'>
//       <div className="footer-content">
//         <div className="footer-content-left">
//           <img src={assets.logo} alt="" />
//           <p>Lorem Ipsum is simple dummy text of the printing and typesetting industry. Lorem Ispum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
//           <div className="footer-social-icons">
//             <img src={assets.facebook_icon} alt="" />
//             <img src={assets.twitter_icon} alt="" />
//             <img src={assets.linkedin_icon} alt="" />
//           </div>
//         </div>
//         <div className="footer-content-center">
//           <h2>COMPANY</h2>
//           <ul>
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy Policy</li>
//           </ul>
//         </div>
//         <div className="footer-content-right">
//           <h2>GET IN TOUCH</h2>
//           <ul>
//             <li>+1-212-456-7890</li>
//             <li>contact@tomato.com</li>
//           </ul>
//         </div>
//       </div>
//       <hr />
//       <p className="footer-copyright">Copyright 2025 &copy; Tomato.com - All Right Reserved</p>
//     </div>
//   )
// }

// export default Footer









// import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">

      <div className="footer-content">

        {/* LEFT */}
        <div className="footer-content-left">

          {/* <img
            className="footer-logo"
            src={assets.logo}
            alt="Vingo Logo"
          /> */}

          <h1 className="text-3xl font-bold mb-2 text-[#ff4d2d]">Vingo</h1>

          <p>
            Vingo makes food delivery simple, fast and convenient.
            Explore restaurants near you, order your favorite meals
            and enjoy delicious food at your doorstep.
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>

        </div>

        {/* CENTER */}
        <div className="footer-content-center">

          <h2>COMPANY</h2>

          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>

        </div>

        {/* RIGHT */}
        <div className="footer-content-right">

          <h2>GET IN TOUCH</h2>

          <ul>
            <li>📞 +91 99056 97921</li>
            <li>✉️ manjeetjha.dev@gmail.com</li>
            <li>📍 India</li>
          </ul>

        </div>

      </div>

      <hr />

      <p className="footer-copyright">
        © 2026 Vingo.com — All Rights Reserved
      </p>

    </footer>
  );
};

export default Footer;
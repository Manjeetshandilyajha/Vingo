// // import React from 'react'
// import './AppDownload.css'
// import { assets } from '../../assets/assets'

// const AppDownload = () => {
//   return (
//     <div className='app-download' id='app-download'>
//       <p>For Better Experience Download <br /> Tomato App</p>
//       <div className="app-download-platforms">
//         <img src={assets.play_store} alt="" />
//         <img src={assets.app_store} alt="" />
//       </div>
//     </div>
//   )
// }

// export default AppDownload



// import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <section className="app-download" id="app-download">
      <div className="app-download-content">
        <hr className="hr"/>
        <span className="app-download-badge">📱 VINGO MOBILE APP</span>

        <h2>
          Order food faster with
          <span> Vingo App</span>
        </h2>

        <p>
          Discover your favorite food, explore nearby restaurants,
          and get delicious meals delivered straight to your doorstep.
        </p>

        <div className="app-download-platforms">
          <img src={assets.play_store} alt="Get it on Google Play" />
          <img src={assets.app_store} alt="Download on App Store" />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
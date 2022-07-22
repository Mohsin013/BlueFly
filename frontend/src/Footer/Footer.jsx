import React from "react";
import styles from "./Footer.module.css"
import {FiInstagram} from "react-icons/fi"
import {BsFacebook} from "react-icons/bs"
import { IconContext } from "react-icons";
import IMG from "./image.webp"



const Footer=()=>{
  return (
    <>
     <div className={styles.container}>
       <div className={styles.upperdiv}>
         <div className={styles.maindiv}>
           <h2>ABOUT US</h2>
           <div className={styles.about}>
             <div className={styles.right}>
               <a href="">Contact Us</a>
               <a href="">Frequently Asked Questions</a>
               <a href="">Shipping & Returns</a>
               <a href="">Pre-Owned Guide</a>
             </div>
             <div className={styles.left}>
               <a href=""> Sell on Bluefly</a>
               <a href="">Privacy Policy</a>
               <a href="">Terms & Conditions</a>
               <a href="">Do not sell my personal information</a>
             </div>
           </div>
         </div>
         <div className={styles.sign}>
           <h2>SIGN AND SAVE</h2>
           <div className={styles.save}>
             <p>Subscribe to get exclusive offers on designer brands</p>
             <input type="email" placeholder="Enter Your Email" required/>
            <br/>
              <button>SUBSCRIBE</button>
              <IconContext.Provider value={{ color:"black", size:"35px", className: 'react-icons' }}>
              <div className={styles.icon}>
                <a href=""><FiInstagram/></a>
                <a href=""><BsFacebook/></a>
              </div>
              </IconContext.Provider>
           </div>
         </div>
       </div>
       <div className={styles.lowerdiv}>
         <img src={IMG} alt=""/>
         <p>© 2022 Bluefly 1998-2020 BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS RESERVED</p>
       </div>
     </div>
  </>
  )
}

export default Footer
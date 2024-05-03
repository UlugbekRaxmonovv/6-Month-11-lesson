import React from 'react';
import './Footter.css'
import rasm1 from '../../assets/img/rasm.png'
import rasm2 from '../../assets/img/lo.png'
import rasm3 from '../../assets/img/tili.png'
import rasm4 from '../../assets/img/tilg.png'
import rasm5 from '../../assets/img/list.png'
import rasm6 from '../../assets/img/gogli.png'
import rasm7 from '../../assets/img/gogli1.png'
import rasm8 from '../../assets/img/pay.png'
import rasm9 from '../../assets/img/fon.png'
import { NavLink } from 'react-router-dom';
import { BsTelegram } from "react-icons/bs";
import { VscGithubInverted, VscTwitter,VscVmRunning } from "react-icons/vsc";



const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="footer-all">
                        <div className="footer-row">
                          <ul>
                            <h1></h1>
                            <li>
                                <a href="#"><img src={rasm1} alt="" /></a>
                            </li>
                            <li>
                                <div className="p1">
                                    <p>Awesome grocery store websitetemplate</p>
                                </div>
                                
                            </li>
                            <li>
                                <div className="link">
                                <div className="link-all">
                                     <img src={rasm2} alt="" />
                                    </div> 
                                    <div className="link-all">
                                      <a href="#" className="">Address: 5171 W Campbell Ave</a>
                                    </div>
                                </div>
                            </li>
                           <li>
                            <a href="#" className="">Call Us:(+91) - 540-025-124553</a>
                           </li>
                           <li>
                                <div className="link">
                                <div className="link-all">
                                     <img src={rasm3} alt="" />
                                    </div> 
                                    <div className="link-all">
                                      <a href="#" className="">Address: 5171 W Campbell Ave</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="link">
                                <div className="link-all">
                                     <img src={rasm4} alt="" />
                                    </div> 
                                    <div className="link-all">
                                      <a href="#" className="">Email:sale@Nest.com</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="link">
                                <div className="link-all">
                                     <img src={rasm5} alt="" />
                                    </div> 
                                    <div className="link-all">
                                      <a href="#" className="">Hours:10:00 - 18:00, Mon - Sat</a>
                                    </div>
                                </div>
                            </li>
                          </ul>
                        </div>
                       <div className="footer-row">
                       <p>Company</p>
                        <ul>
        
                            <li>
                                <a href="#" className="">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="">Delivery Information</a>
                            </li>
                            <li>
                                <a href="#" className="">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#" className="">Support Center</a>
                            </li>
                            <li>
                                <a href="#" className="">Careers</a>
                            </li>
                        </ul>
                       </div>

                       <div className="footer-row">
                        <ul>
                            <h1>Account</h1>
                        <li>
                                <a href="#" className=""><NavLink className='p' to={"/register"}>Sign In</NavLink></a>
                            </li>
                            <li>
                                <a href="#" className="">View Cart</a>
                            </li>
                            <li>
                                <a href="#" className="">My Wishlist</a>
                            </li>
                            <li>
                                <a href="#" className="">Track My Order</a>
                            </li>
                            <li>
                                <a href="#" className="">Help Ticket</a>
                            </li>
                            <li>
                                <a href="#" className="">Shipping Details</a>
                            </li>
                            <li>
                                <a href="#" className="">Compare products</a>
                            </li>
                        </ul>
                       </div>


                       <div className="footer-row">
                        <ul>
                            <h1>Corporate</h1>
                        <li>
                                <a href="#" className="">Become a Vendor</a>
                            </li>
                            <li>
                                <a href="#" className="">Affiliate Program</a>
                            </li>
                            <li>
                                <a href="#" className="">Farm Business</a>
                            </li>
                            <li>
                                <a href="#" className="">Farm Careers</a>
                            </li>
                            <li>
                                <a href="#" className="">Our Suppliers</a>
                            </li>
                            <li>
                                <a href="#" className="">Accessibility</a>
                            </li>
                            <li>
                                <a href="#" className="">Promotions</a>
                            </li>
                        </ul>
                       </div>

                       <div className="footer-row">
                        <ul>
                            <h1>Popular</h1>
                        <li>
                                <a href="#" className="">Milk & Flavoured Milk</a>
                            </li>
                            <li>
                                <a href="#" className="">Butter and Margarine</a>
                            </li>
                            <li>
                                <a href="#" className="">Eggs Substitutes</a>
                            </li>
                            <li>
                                <a href="#" className="">Marmalades</a>
                            </li>
                            <li>
                                <a href="#" className="">Sour Cream and Dips</a>
                            </li>
                            <li>
                                <a href="#" className="">Tea & Kombucha</a>
                            </li>
                            <li>
                                <a href="#" className="">Cheese</a>
                            </li>
                        </ul>
                       </div>
                       <div className="footer-row">
                        <ul>
                            <h1>Install App</h1>
                        <li>
                                <a href="#" className="">From App Store or Google Play</a>
                            </li>
                            <li>
                               <div className="gogli">
                               <div className="gogli-img">
                                    <img src={rasm6} alt="" />
                                </div>
                                <div className="gogli-img">
                                    <img src={rasm7} alt="" />
                                </div>
                               </div>
                            </li>
                            <li>
                                <div className="span">
                                      <p>Secured Payment Gateways</p>
                                </div>                    
                              
                            </li>
                            <li>
                              <div className="pay">
                              < img src={rasm8} alt="" />
                              </div>
                            </li>

                        </ul>
                       </div>
                    </div>
                    <div className="right"></div>

                    <div className="footer-bottom">
                    <div className="footer-top">
                            <p>© 2022, Nest - HTML Ecommerce Template All rights reserved</p>
                        </div>
                        <div className="footer-top">
                        <div className="footer-phon">
                         <div className="footer-phon-top ">
                                <img src={rasm9} alt="" />
                              </div>
                              <div className="footer-phon-top ">
                                <span>1900 - 6666</span>
                                <p>Working 8:00 - 22:00</p>
                              </div>
                         </div>
                         <div className="footer-phon">
                         <div className="footer-phon-top ">
                                <img src={rasm9} alt="" />
                              </div>
                              <div className="footer-phon-top ">
                                <span>1900 - 6666</span>
                                <p>Working 8:00 - 22:00</p>
                              </div>
                         </div>
                        </div>
                        <div className="footer-top">
                           <div className="link-all">
                           <div className="linkk">
                            <div className="link1">
                                    <p>Follow Us</p>
                                </div>
                                <div className="link2">
                                    <BsTelegram />
                                </div>
                                <div className="link2">
                                <VscGithubInverted />

                                </div>
                                <div className="link2">
                                <VscTwitter />

                                </div>
                                <div className="link2">
                                <VscVmRunning />

                                </div>
                              

                            </div>
                            <p>Up to 15% discount on your first subscribe</p>
                           </div>
                          
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

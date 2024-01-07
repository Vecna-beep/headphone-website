import React from 'react';
import { RiBardFill, RiInstagramLine, RiYoutubeLine, RiFacebookBoxLine,  RiTwitterXFill} from "react-icons/ri";

function Footer() {
  return (
        <footer className="footer">
            <div className="footer--container container grid">
                <div>
                    <a href="#" className="footer--logo">Skull Candy</a>
                </div>

                <div className="footer--data grid">
                    <div>
                        <h3 className="footer--title">Shop</h3>
                            <ul className="footer--links">
                                <li>
                                    <a href="" className="footer--link">Featured & Sale</a>
                                </li>
                                <li>
                                    <a href="" className="footer--link">Earbuds</a>
                                </li>
                                <li>
                                    <a href="" className="footer--link">Headphones</a>
                                </li>
                                <li>
                                    <a href="" className="footer--link">Gaming</a>
                                </li>
                            </ul>
                    </div>

                    <div>
                        <h3 className="footer--title">Support</h3>
                            <ul className="footer--links">
                                <li>
                                    <a href="" className="footer--link">Support Menu</a>
                                </li>
                                <li>
                                    <a href="" className="footer--link">Product Help</a>
                                </li>
                                <li>
                                    <a href="" className="footer--link">Warranty</a>
                                </li>
                                <li>
                                    <a href="" className="footer--link">Updates</a>
                                </li>
                            </ul>
                    </div>

                    <div className="footer--group">
                        <form action="" className="footer--form">
                            <input type="email" placeholder='Sign up for Emails' className="footer--input" />
                            <button className="footer--button button">
                                Updates 
                                <RiBardFill className='update-icon'/>
                            </button>
                        </form>

                        <div className="footer--social">
                            <a href="http://www.instagram.com/" className="footer--social-link">
                            <RiInstagramLine  />
                            </a>

                            <a href="http://www.youtube.com/" className="footer--social-link">
                            <RiYoutubeLine />
                            </a>

                            <a href="http://www.facebook.com/" className="footer--social-link">
                            <RiFacebookBoxLine /> 
                            </a>

                            <a href="http://www.twitter.com/" className="footer--social-link">
                            <RiTwitterXFill />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <span className="footer--copy">
                &#169; All Rigits Reserved
            </span>
        </footer>
  )
}

export default Footer
import React from 'react';
import Logo from '../images/insta_logo.png';
import Ico01 from '../images/ico_heart.png';
import Ico02 from '../images/ico_search.png';
import Ico03 from '../images/ico_dm.png';


const Header = () => {
    return(
        <div className="header">
            <div className="left">
                <a href="#none" className="logo">
                    <img src={Logo} alt="" />
                </a>
            </div>
            <div className="right">
                <a href="#none" className="ico_heart">
                    <img src={Ico01} alt="" />
                </a>
                <a href="#none" className="ico_search">
                    <img src={Ico02} alt="" />
                </a>
                <a href="#none" className="ico_dm">
                    <img src={Ico03} alt="" />
                </a>
            </div>
        </div>
    );
  };
  
  export default Header;
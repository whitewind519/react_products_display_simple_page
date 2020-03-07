import React from 'react';
// import { NavLink } from 'react-router-dom';
import './Footer.css';
class Footer extends React.Component{
    constructor(props)
    {
        super(props);
      
    }
    render(){
        return(
            <div className = "footerBar">
                <hr/>
                <div className = "footer">
                    <div className = "footer-wrapper">
                        <div className = "social">
                            <div className = "item">FACEBOOK</div>
                            <div className = "item">INSTOGRAM</div>
                        </div>
                        <div className = "space"></div>
                        <div className = "menu">
                            <div className = "item">HELP</div>
                            <div className = "item">DELIVERY & RETURNS</div>
                        </div>
                        <div className = "helper">
                            <div className = "item">ABOUT EOLL</div>
                        </div>
                        <div className = "cart">
                            <img src = "assets/icons/cart.svg" alt = "" />
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Footer;
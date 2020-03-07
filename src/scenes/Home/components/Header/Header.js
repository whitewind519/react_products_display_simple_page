import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css';
class Header extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            mobile_menu_open:false
        }
        this.cartClassNameRender = this.cartClassNameRender.bind(this);
    }
    cartClassNameRender()
    {
        if(this.props.product.carts.size > 0) return "cart open";
        else return "cart hide";
    }
    render(){
        return(
            <div className = "headerBar">
                <div className = "header">
                    <div className = "header-wrapper">
                        <div className = "logo">
                            <NavLink to={`/`}>
                                EOLL
                            </NavLink>
                        </div>
                        <div className = "menu">
                            <div className = "item">LADIES</div>
                            <div className = "item">GENTS</div>
                            <div className = "item">CHILDREN</div>
                            <div className = "item">TRENDS</div>
                            <div className = "item">SALE</div>
                        </div>
                        <div className = "right-helper">
                            <div className = "item">LOGIN</div>
                            <div className = "item">HELP</div>
                            <div className = "item">
                                <img src = "assets/icons/search.svg" alt = ""/>
                            </div>
                            <div className = "item">
                                <img src = "assets/icons/cart.svg" alt = ""/>
                                <div className = {this.cartClassNameRender()}>
                                    <div>
                                        {this.props.product.carts.size}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "mobile-menu">
                            <div className = "menu-icon">
                                <i className={this.state.mobile_menu_open?"fa fa-window-close":"fa fa-bars"}
                                    onClick = {
                                        () => {
                                            this.setState({
                                                mobile_menu_open:!this.state.mobile_menu_open
                                            })
                                        }
                                    }
                                ></i>
                            </div>
                            <div className = { this.state.mobile_menu_open?"menu-wrapper open":"menu-wrapper hide"
                            }>
                                <div className = "item">LADIES</div>
                                <div className = "item">GENTS</div>
                                <div className = "item">CHILDREN</div>
                                <div className = "item">TRENDS</div>
                                <div className = "item">SALE</div>
                                <hr/>
                                <div className = "item">HELP</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default connect(
    state => ({
        product: state.default.services.product
    }),
   null
  )(Header);
  
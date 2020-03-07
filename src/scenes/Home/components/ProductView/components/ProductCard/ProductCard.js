import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import {getProduct} from '../../../../../../services/product/productActions'
import './productCard.css';
class ProductCard extends React.Component{
    constructor(props)
    {
        super(props);
        this.gotoDetails = this.gotoDetails.bind(this);
    }
    gotoDetails(id){
        this.props.productActions.getProduct(id);
    }
    render()
    {
        return(
            <div className = "cardView">
               <NavLink  to={`/details`}>
                   <div className = "imageShow">
                        <img src = {this.props.imgUrl}
                            onClick = {()=>this.gotoDetails(this.props.id)}
                            alt = ""
                        />
                        <div className = "colorSpace">
                            AVAILABLE IN
                            <div>
                                <label className = "color-marble"></label>
                                <label className = "color-pastel"></label>
                                <label className = "color-charcoal"></label>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <div className = "product-info">
                    <div className = "title">{this.props.title?this.props.title:""}</div>
                    <div className = "description">
                        <div className = "more">{this.props.more?this.props.more:""}</div>
                        <div className = "price">{this.props.price?this.props.price:""}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
   null,
    dispatch => ({
        productActions: bindActionCreators(
            { getProduct},
            dispatch
        )
    })
  )(ProductCard);
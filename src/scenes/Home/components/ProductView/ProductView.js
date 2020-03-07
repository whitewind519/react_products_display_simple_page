import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Col, Row} from 'reactstrap';
import {getProducts, getProduct} from '../../../../services/product/productActions';
import ProductCard from './components/ProductCard/ProductCard'
import './view.css';
class ProductView extends React.Component{
    constructor(props)
    {
        super(props);
        this.props.productActions.getProducts("");
    }
    renderProducts(){
        if(!this.props.products){
            return <div></div>
        } else {
            const products = this.props.products.map((product, index) => (
                <Col key = {index} lg = "3" md = "4" sm = "6">
                    <ProductCard 
                        imgUrl = {product.imgUrl} 
                        title = {product.name} 
                        more = {product.size} 
                        price = {product.price}
                        id = {product.id}
                    />
                </Col>
            ));
            return(
                <div className = "view-wrapper"><Row>{products}</Row></div>
            )
        }
    }
    render(){
        return(
            <div>
                {this.renderProducts()}
            </div>
        )
    }
}
export default connect(
    state => ({
      products: state.default.services.product.products
    }),
    dispatch => ({
        productActions: bindActionCreators(
            {getProducts, getProduct},
            dispatch
        )
    })
  )(ProductView);
  
import React from 'react';
import {CustomInput, Button} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCarts } from '../../../../services/product/productActions';
import './Details.css';
class Details extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            addBtnActive:false,
            color:null
        }
        this.changeColor = this.changeColor.bind(this);
        this.isCart      = this.isCart.bind(this);
    }
    componentDidMount()
    {
        window.scrollTo(0,0);
    }
    changeColor(e){
        this.setState({
            color:e.target.id
        })
    }
    addCart(id)
    {
        console.log("sdfsdf");
        var newCarts = this.props.productR.carts;
        if(!newCarts.has(id))
        {
            newCarts.add(id);
        }
        this.props.cartAction.updateCarts(newCarts);
    }
    isCart(){
        if(this.props.productR.carts.has(this.props.product.id)) return true;
        else return false;
    }
    addBtnText()
    {
        if(this.isCart())
        {
            return <i className = "fa fa-check"></i>
        } else {
            return "ADD TO BAG"
        }
    }
    renderDetails(){
        if(this.props.product)
        {
            return(
             <div className = "detail-view">
                <img src = {this.props.product.imgUrl?this.props.product.imgUrl:""} alt=""/>
                    <div className = "detail-info">
                    <div className = "space"></div>
                    <div className = "details">
                        <div className = "title">{this.props.product.name}</div>
                        <div className = "info">
                            <div className = "more">{this.props.product.size}</div>
                            <div className = "price">{this.props.product.price}</div>
                        </div>
                        <div className="color-selection">
                            <hr/>
                            <div className = "color-selection-wrapper">
                            <div className = "title">SELECT COLOR</div>
                                <div className = "select-area">
                                    <CustomInput className = "item color-marble" type="radio" name = "color" id="marble"     label="MARBLE"    onChange = {this.changeColor}/>
                                    <CustomInput className = "item color-nude" type="radio" name = "color" id="nude"       label="NUDE"      onChange = {this.changeColor}/>
                                    <CustomInput className = "item color-charcoal" type="radio" name = "color" id="charcoal"   label="CHARCOAL"  onChange = {this.changeColor}/>
                                </div>
                            </div>
                            <hr/>

                        </div>
                        <div className = "add-to-blog">
                            {
                                this.state.color?(
                                    <Button onClick = {()=>this.addCart(this.props.product.id)} className = {this.isCart()?"success":""}> 
                                        <div className = "textBtn">{this.addBtnText()}</div>
                                    </Button>
                                ):(
                                    <Button disabled className = {this.isCart()?"success":""}>
                                        <div className = "textBtn">{this.addBtnText()}</div>
                                    </Button>
                                )
                            }
                               
                        </div>
                        <div className = "detail">
                            <div className ="description-info">
                                Designed in Paris, Plastic frame cat eye sunglasses with bright coloured geometirc shapes
                            </div>
                            <div className = "title">MATERIAL</div>
                            <div className = "info">PLASTIC</div>
                            <div className = "title">SHAPE</div>
                            <div className = "info">ROUNDED SQUARE</div>
                            <div className = "title">DIMENSIONS</div>
                            <div className = "info">48 20 148</div>
                            <div className = "see-btn"><Button outline>SEE SIMILAR PRODUCTS</Button></div>
                        </div>
                        <div className = "bottom-bar">
                            <hr/>
                            <div className = "left-item">HELF</div>
                            <div className = "left-item">DELIVERY & RETURNS</div>
                            <div className = "right-item">ABOUT EOLL</div>
                        </div>
                </div>
                </div>
            </div>
            )
        }
    }
    render(){
        console.log(this.props.carts);
        return(
           <div>
               {this.renderDetails()}
           </div>
        )
    }
}

export default connect(
    state => ({
      product: state.default.services.product.currentProduct,
      productR:   state.default.services.product
    }),
    dispatch => ({
        cartAction: bindActionCreators(
            {updateCarts},
            dispatch
        )
    })
  )(Details);
  
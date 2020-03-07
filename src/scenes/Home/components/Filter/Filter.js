import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Row, Col, Label,Form, FormGroup, CustomInput} from 'reactstrap';
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
import { getProducts } from '../../../../services/product/productActions';
import './Filter.css';

class Filter extends React.Component{
    constructor(props)
    {
        super(props);
        this.filterFun = this.filterFun.bind(this);
        this.filterSetMaterial = new Set();
        this.filterSetSize     = new Set();
        this.filterSetShape    = new Set();
        this.filters           = {};
        this.state = {
            filterIsShow:false
        }
    }
    filterFun(e){
       var checked = e.target.checked;
       var filter_category = e.target.id.split('-')[0];
       var filter_name     = e.target.id.split('-')[1];
       switch(filter_category){
           case "material":
               if(checked == true){
                   this.filterSetMaterial.add(filter_name);
               } else {
                   this.filterSetMaterial.delete(filter_name);
               }
               break;
            case "size":
                if(checked == true)
                {
                    this.filterSetSize.add(filter_name);
                } else {
                    this.filterSetSize.delete(filter_name);
                }
                break;
            case "shape":
                if(checked == true)
                {
                    this.filterSetShape.add(filter_name);
                } else {
                    this.filterSetShape.delete(filter_name);
                }
                break;
            default:
                break;
       }
      this.filters = {
          "material": this.filterSetMaterial,
          "size"    : this.filterSetSize,
          "shape"   : this.filterSetShape
      }
      this.props.productActions.getProducts(this.filters);
    }
    render(){
        return(
            <div className = "filter-wrapper">
                <div className = "filterHandle"
                    onClick = {() => {
                        this.setState({
                            filterIsShow:!this.state.filterIsShow
                        })
                    }}
                >
                    FILTERS <i className={this.state.filterIsShow?"fa fa-chevron-up":"fa fa-chevron-down"}></i>
                <hr/>
                </div>
                <div className = {this.state.filterIsShow?"filterArea open":"filterArea hide"}>
                <div className = "filter-content">
                        <Form>
                            <FormGroup>
                                <Label for="materialCheck">MATERIALS</Label>
                                <div>
                                    <CustomInput type="checkbox" id="material-glass"   label="GLASS"   onChange = {this.filterFun}/>
                                    <CustomInput type="checkbox" id="material-plastic" label="PLASTIC" onChange = {this.filterFun}/>
                                    <CustomInput type="checkbox" id="material-wood"    label="WOOD"    onChange = {this.filterFun} />
                                </div>
                            </FormGroup>
                        </Form>
                        <Form>
                            <FormGroup>
                                <Label for="sizeCheck">SIZE</Label>
                                <div>
                                    <CustomInput type="checkbox" id="size-medium"   label="MEDIUM" onChange = {this.filterFun}/>
                                    <CustomInput type="checkbox" id="size-narrow"   label="NARROW" onChange = {this.filterFun}/>
                                    <CustomInput type="checkbox" id="size-wide"     label="WIDE"   onChange = {this.filterFun}/>
                                </div>
                            </FormGroup>
                        </Form>
                         <Form>
                            <FormGroup>
                                <Label for="shapeCheck">SHAPE</Label>
                                <div>
                                    <CustomInput type="checkbox" id="shape-rectangular"          label="RECTANGULAR" onChange = {this.filterFun}/>
                                    <CustomInput type="checkbox" id="shape-round"                label="ROUND"       onChange = {this.filterFun}/>
                                    <CustomInput type="checkbox" id="shape-roundRectangular"    label="ROUND-RECTANGULAR" onChange = {this.filterFun}/>
                                </div>
                            </FormGroup>
                        </Form>
                        <Form>
                            <FormGroup>
                                <Label for="colorCheck">COLOR</Label>
                                <Row>
                                    <Col md="6" sm = "6" xs = "6">
                                        <CustomInput type="radio" id="color-marble"    className = "color color-marble" name = "color" label="MARBLE" />
                                        <CustomInput type="radio" id="color-charcoal" className="color color-charcoal"  name = "color" label="CHARCOAL"     />
                                        <CustomInput type="radio" id="color-pastel"  className="color color-pastel"   name = "color" label="PASTEL" />
                                        <CustomInput type="radio" id="color-red"  className="color color-red"      name = "color" label="RED" />
                                    </Col>
                                    <Col md="6" sm = "6" xs = "6">
                                        <CustomInput type="radio" id="color-nude"  className="color color-nude"          name = "color" label="NUDE" />
                                        <CustomInput type="radio" id="color-blue"  className="color color-blue"          name = "color" label="BLUE"     />
                                        <CustomInput type="radio" id="color-transparent"  className="color color-transparent"   name = "color" label="TRANSPARENT" />
                                        <CustomInput type="radio" id="color-tortoise"   className="color color-tortoise"     name = "color" label="TORTOISE" />
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Form>
                         <Form>
                            <FormGroup>
                                <Label for="shapeCheck">BARNDS</Label>
                                <div className = "brands">
                                    <CustomInput type="checkbox" id="brands-rectangular"          label="RECTANGULAR" />
                                    <CustomInput type="checkbox" id="brands-round"                label="ROUND"       />
                                    <CustomInput type="checkbox" id="brands-roundRectangular"     label="ROUND-RECTANGULAR" />
                                    <CustomInput type="checkbox" id="brands-roundRectangular"     label="ROUND-RECTANGULAR" />
                                    <CustomInput type="checkbox" id="brands-roundRectangular"     label="ROUND-RECTANGULAR" />
                                </div>
                            </FormGroup>
                        </Form>
                        <Form className = "price">
                            <FormGroup>
                                <Label for="shapeCheck">PRICE</Label>
                                <SliderComponent value={[30, 70]} type='Range'/>
                                <div className = "price-area">
                                    <div className = "start">10$</div>
                                    <div className = "end">100$</div>
                                </div>
                            </FormGroup>
                        </Form>
                        
                </div>
                <hr/>
                </div>
            </div>
        )
    }
}

export default  connect(
   null,
    dispatch => ({
        productActions: bindActionCreators(
            {getProducts},
            dispatch
        )
    })
  )(Filter);;
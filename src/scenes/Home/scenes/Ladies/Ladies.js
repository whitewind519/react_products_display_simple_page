import React from 'react';
import Filter from '../../components/Filter/Filter';
import ProductView from '../../components/ProductView/ProductView';
import Footer from '../../components/Footer/Footer';
class Laides extends React.Component{
    constructor(props)
    {
        super(props);
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render(){
        return(
            <div>
                <Filter/>
                <ProductView/>
                <Footer/>
            </div>
        )
    }
}

export default Laides;
import React, { Component } from 'react';
import KitchenOrder from './KitchenOrder';  
import { connect } from 'react-redux';


class Kitchen extends Component{
        render(){
        const { orders } = this.props;
        return(
            <div className="container">
                <KitchenOrder orders={orders}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        orders: state.order.orders,
    }
}

export default connect(mapStateToProps)(Kitchen);
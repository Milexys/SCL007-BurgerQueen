import React, { Component } from 'react';
import KitchenOrder from './KitchenOrder';  
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


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
    console.log(state)
    return {
        orders: state.firestore.ordered.orders
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'orders'}
    ])
)(Kitchen);
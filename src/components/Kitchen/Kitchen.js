import React, { Component } from 'react';
import KitchenOrder from './KitchenOrder';  
import { connect } from 'react-redux';


class Kitchen extends Component{
        render(){
        const { menus } = this.props;
        return(
            <div className="container">
                <KitchenOrder menus={menus}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        menus: state.menu.menus,
    }
}

export default connect(mapStateToProps)(Kitchen);
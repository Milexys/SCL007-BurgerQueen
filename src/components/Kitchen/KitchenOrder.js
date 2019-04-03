import React from 'react';
import moment from 'moment';


const KitchenOrder = ({orders}) => {
    return(
        <div className="row mt-2">
            {orders && orders.map((order) =>{
                return ( 
                    <div className="col-md-4"  key={order.id}>               
                <div className="card text-white bg-success mb-3">
                    <div className="card-header">
                       <h4>{order.name}</h4>
                       <p className="blockquote-footer"> {moment(order.date.toDate()).format('LT')} </p> 
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                        {order.food.join(", ")}
                        </p>
                    </div>
                </div>
                </div>
            )
            })}
           
        </div>
    )
}
export default KitchenOrder;
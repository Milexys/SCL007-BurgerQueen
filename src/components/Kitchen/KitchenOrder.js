import React from 'react';


const KitchenOrder = ({orders}) => {
    return(
        <div className="row mt-2">
            {orders && orders.map((order, i) =>{
                return ( 
                    <div className="col-md-3"  key={i}>               
                <div className="card text-white bg-success mb-3">
                    <div className="card-header">
                        {order.clientName}
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                        {order.food}
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
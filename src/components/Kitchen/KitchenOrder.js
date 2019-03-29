import React from 'react';


const KitchenOrder = ({orders}) => {
    return(
        <div className="row mt-2">
            {orders && orders.map((order) =>{
                return ( 
                    <div className="col-md-4"  key={order.id}>               
                <div className="card text-white bg-success mb-3">
                    <div className="card-header">
                        {order.name}
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
import React from 'react';


const KitchenOrder = ({menus}) => {
    return(
        <div className="row mt-2">
           
            {menus && menus.map((menu, i) =>{
                return ( 
                    <div className="col-md-3"  key={i}>               
                <div className="card text-white bg-success mb-3">
                    <div className="card-header">
                        {menu.clientName}
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                        {menu.food}
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
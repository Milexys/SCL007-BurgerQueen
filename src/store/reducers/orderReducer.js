const initState = {
    orders: [{
        clientName: 'Milexys',
        food: 'cafe',
    },
    {
        clientName: 'Sara',
        food: 'hamburguesa',
    }],
};

const orderReducer = (state = initState, action) => {
    switch (action.type){
        case 'ADD_ORDER':
        console.log('proyecto listo', action.order)
    }
 return state
}

export default orderReducer;
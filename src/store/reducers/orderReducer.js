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
            console.log('ADD ORDER', action.order);
            return state
        case 'ADD_ORDER_ERROR':
            console.log('ADD ORDER ERROR', action.err);
            return state
        default:
            return state
    }
}

export default orderReducer;
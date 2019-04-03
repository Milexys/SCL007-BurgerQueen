export const addOrder = (order) => {
    return (dispatch, getState, {  getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection("orders").add({
            ...order,
            date: new Date(),
        }).then(() => {
            dispatch({ type: 'ADD_ORDER', order})
        }).catch((err) => {
            dispatch({type: 'ADD_ORDER_ERROR', err})
        })
        
    }
}
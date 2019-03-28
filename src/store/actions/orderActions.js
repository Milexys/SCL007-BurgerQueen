export const addOrder = (order) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection("orders").add({
            ...order,
        }).then(() => {
            dispatch({ type: 'ADD_ORDER', order})
        }).catch((err) => {
            dispatch({type: 'ADD_ORDER_ERROR', err})
        })
        
    }
}
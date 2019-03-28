export const addOrder = (order) => {
    return (dispatch, getState, { getFirestore }) => {
        //make async call to database 
        dispatch({ type: 'ADD_ORDER', order})
    }
}
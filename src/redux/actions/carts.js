export const addItems = (data) => {
    return {
        type: 'CARTS_ADD_ITEM',
        payload: data
    }
}

export const deleteAllItems = () => {
    return {
        type : 'CARTS_DELETE_ALL_ITEMS',
        payload : []
    }
}
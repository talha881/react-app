const initaliseState = { products: []}






export const productReducer = (state = initaliseState, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        case 'GET_PRODUCT':
            return {
                ...state,
                product: action.payload
            }

        default:
            return state

    }


}
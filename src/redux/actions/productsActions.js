import axios from 'axios'
export const getAllProducts = () => async (dispatch) => {
    const response = await axios.get(`https://fakestoreapi.com/products`)
    dispatch({
        type: 'GET_ALL_PRODUCTS',
        payload: response.data
    })
  }

  export const getProductsById = (id) => async (dispatch) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    dispatch({
        type: 'GET_PRODUCT',
        payload: response.data
    })
  }
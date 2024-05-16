import {PRODUCT,PANIER } from "../constants/actions"

/* The target is  : /register */
export const addproducts= (params) => dispatch => {
    dispatch({ type: PRODUCT, payload: params.productslists})
        
}
export const  addtopanier = (params)=> dispatch => { 
    dispatch({ type: PANIER, payload: params.productspanier})

}


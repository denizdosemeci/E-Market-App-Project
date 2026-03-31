// This file handles all API requests related to products.
// It is responsible for fetching product data from the backend. 

import axios from 'axios'

export const getProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products")

    return response.data.products
}


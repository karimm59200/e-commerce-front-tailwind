import axios from 'axios';

const API_URL = 'http://localhost:8080/api/product';

export const getAllProducts = () => axios.get(API_URL + '/get_all_product');

export const getProductById = (id) => axios.get(`${API_URL}/${id}`);

export const addProduct = (product) => axios.post(API_URL, product);

export const updateProduct = (id, product) => axios.put(API_URL + '/update_product/' + id, product);

export const deleteProduct = (id) => axios.delete(API_URL + '/delete_product/' + id);

export const deleteAllProducts = () => axios.delete(API_URL);


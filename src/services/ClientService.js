import axios from 'axios';

const API_URL = 'http://localhost:8080/api/client';

export const getAllClients = () => axios.get(API_URL + '/get_all_client');

export const getClientById = (id) => axios.get(`${API_URL}/${id}`);

export const addClient = (client) => axios.post(API_URL, client);

export const updateClient = (id, client) => axios.put(API_URL + '/update_client/' + id, client);

export const deleteClient = (id) => axios.delete(API_URL + '/delete_client/' + id);

export const deleteAllClients = () => axios.delete(API_URL);


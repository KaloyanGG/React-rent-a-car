import axios from "axios";

const baseUrl = 'http://localhost:3001/customers';
export function getAllCustomers() {
    return axios.get(`${baseUrl}`);

}
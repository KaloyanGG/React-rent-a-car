import axios from "axios";

const baseUrl = 'http://localhost:3001/rentalEvents';

export function getAllRentalEvents() {
    return axios.get(`${baseUrl}`);
}
export function getRentalEventById(id) {
    return axios.get(`${baseUrl}/${id}`);
}
export function saveRentalEvent(rentalEvent) {
    return axios.post(`${baseUrl}`, rentalEvent);
}

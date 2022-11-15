import axios from "axios";

export function getVehicles() {
  return axios.get('http://localhost:3001/vehicles');
}
export function getVehicleById(id){
    return axios.get(`http://localhost:3001/vehicles/${id}`);
}
export function deleteVehicleById(id){
    return axios.delete(`http://localhost:3001/vehicles/${id}`);
}
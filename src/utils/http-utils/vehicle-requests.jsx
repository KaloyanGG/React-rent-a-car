import axios from "axios";

export function getVehicles() {
  return axios.get('http://localhost:3001/vehicles');
}
export function getVehicleById(id) {
  return axios.get(`http://localhost:3001/vehicles/${id}`);
}
export function deleteVehicleById(id) {
  return axios.delete(`http://localhost:3001/vehicles/${id}`);
}
export function updateVehicle(vehicle) {
  return axios.put(`http://localhost:3001/vehicles/${vehicle.id}`, vehicle);
}
export function createVehicle(vehicle) {
  return axios.post('http://localhost:3001/vehicles', vehicle);
}
export async function reduceVehicleAvailability(id) {
  const vehicle = (await getVehicleById(id)).data;
  if(vehicle.count > 0) {
    return axios.patch(`http://localhost:3001/vehicles/${id}`,{count: vehicle.count-1});
  }else {
    alert('No vehicles available with this id');
    return false;
  }

}
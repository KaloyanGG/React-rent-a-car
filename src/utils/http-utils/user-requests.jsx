import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

const BASE_URL = 'http://localhost:3001/customers';
export function getAllUsers() {
    return axios.get(BASE_URL);
}
export function getUserById(id){
    return axios.get(`${BASE_URL}/${id}`);

}
export function saveUser(user) {
    return axios.post(`${BASE_URL}`, user);
}
export function updateUser(user) {
    return axios.put(`http://localhost:3001/customers/${user.id}`, user);
  }
export function deleteUser(user) {
    return axios.delete(`${BASE_URL}/${user.id}`);
}

export async function login(user) {
    const allUsers = (await getAllUsers()).data;

    const foundUser = allUsers.find(u => u.email === user.email && u.password === user.password);

    if (!foundUser) {
        throw new Error('Invalid username/password.');
    }

    localStorage.setItem('loggedUser', JSON.stringify(foundUser));
    return foundUser;


}
import axios from "axios";

const BASE_URL = 'http://localhost:3001/customers';
export function getAllUsers() {
    return axios.get(BASE_URL);
}
export function saveUser(user) {
    return axios.post(`${BASE_URL}`, user);
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
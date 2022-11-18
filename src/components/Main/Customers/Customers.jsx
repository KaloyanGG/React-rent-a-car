import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";
import { getAllCustomers } from "../../../utils/http-utils/customer-requests";
import { deleteUser, deleteUserById } from "../../../utils/http-utils/user-requests";
import './Customers.scss'
export function Customers() {

    const [customers, setCustomers] = useState([]);
    const { user, userLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {

        getAllCustomers().then(response => {
            setCustomers(response.data);
        })

    }, []);
    const deleteMyself = () => {
        deleteUser(user);
        localStorage.removeItem('loggedUser');
        userLogout();
        //navigate('/customers');
        setCustomers(prevCustomers => {
            return prevCustomers.filter(customer => customer.id !== user.id);
        });
    }
    const edit = () => {
        navigate('/customers/edit/' + user.id);
    }

    return (
        <div className="customers">
            <h1>Customers</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => {
                        return (

                            <tr className="customer-row" key={customer.id}>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phoneNumber}</td>
                                {user && user.name === customer.name &&
                                    <>
                                        <button className="btn" onClick={deleteMyself}>Delete</button>
                                        <button className="btn" onClick={edit}>Edit</button>
                                        
                                    </>
                                }
                            </tr>

                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}
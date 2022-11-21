import { Route, Routes } from "react-router-dom";
import { Customers } from "./Customers/Customers";
import { Home } from "./Home/Home";
import { VehicleList } from "./VehicleList/VehicleList";
import './Main.scss';
import { VehicleInfo } from "./VehicleList/VehicleInfo/VehicleInfo";
import { Register } from "../User/Register/Register";
import { Login } from "../User/Login/Login";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { Logout } from "../User/Logout/Logout";
import { NonAuthenticatedGuard } from "../Guards/NonAuthenticatedGuard";
import { AuthenticatedRoute } from "../Guards/AuthenticatedRoute";
import { VehicleEdit } from "./VehicleList/VehicleEdit/VehicleEdit";
import { VehicleAdd } from "./VehicleList/VehicleAdd/VehicleAdd";
import { CustomerEdit } from "./Customers/CustomerEdit/CustomerEdit";
import { AuthenticatedRouteCurrent } from "../Guards/AuthenticatedRouteCurrent";
import { VehicleRent } from "./VehicleList/VehicleRent/VehicleRent";
import { Rentals } from "../Rentals/Rentals";

export function getLoggedUser() {
    return JSON.parse(localStorage.getItem('loggedUser'));
}

export function Main() {


    const { user } = useContext(AuthContext);
    const [personName, setPersonName] = useState(null);

    useEffect(() => {
        if (user) {
            setPersonName(user.name);
        } else {
            setPersonName(null);
        }
        // setPersonName(user ? user.name : null);
    }, [user]);


    return (
        <main className="main">
            <p className="hello">Hello, {personName || 'Guest'}!</p>
            <Routes>
                <Route path="/register" element={<NonAuthenticatedGuard><Register /></NonAuthenticatedGuard>} />
                <Route path="/login" element={<NonAuthenticatedGuard><Login /></NonAuthenticatedGuard>} />

                <Route path="/" element={<Home />} />
                <Route path="/vehicle-list" element={<VehicleList />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/customers/edit/:id" element={<AuthenticatedRouteCurrent><CustomerEdit /></AuthenticatedRouteCurrent>} />
                <Route path="/vehicle-list/add" element={<AuthenticatedRoute><VehicleAdd /></AuthenticatedRoute>} />
                {/* TODO Only admin add vehicles */}
                <Route path="/vehicle-list/:id" element={<VehicleInfo />} />
                <Route path="/vehicle-list/edit/:id" element={<AuthenticatedRoute><VehicleEdit /></AuthenticatedRoute>} />
                <Route path="/vehicle-list/rent/:id" element={<AuthenticatedRoute><VehicleRent /></AuthenticatedRoute>} />
                <Route path="/rentals" element={<AuthenticatedRoute><Rentals /></AuthenticatedRoute>} />
                <Route path="/logout" element={<AuthenticatedRoute><Logout /></AuthenticatedRoute>} />

            </Routes>
        </main>
    )
}
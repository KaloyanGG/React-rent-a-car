import { Route, Routes } from "react-router-dom";
import { Customers } from "./Customers/Customers";
import { Home } from "./Home/Home";
import { VehicleList } from "./VehicleList/VehicleList";
import './Main.scss';
import { VehicleInfo } from "./VehicleList/VehicleInfo/VehicleInfo";

export function Main(){
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vehicle-list" element={<VehicleList/>} />
                <Route path="/customers" element={<Customers/>} />
                <Route path="/vehicle-list/:id" element={<VehicleInfo/>} />
            </Routes>
        </main>
    )
}
import { Route, Routes } from "react-router-dom";
import { Customers } from "./Customers/Customers";
import { Home } from "./Home/Home";
import { VehicleList } from "./VehicleList/VehicleList";

export function Main(){
    return (
        <main className="main">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/vehicle-list" element={<VehicleList/>} />
                <Route path="/customers" element={<Customers/>} />
            </Routes>
            <h1>hallo</h1>
        </main>
    )
}
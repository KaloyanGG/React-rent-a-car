import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getVehicleById } from "../../../../utils/http-utils/vehicle-requests";
import './VehicleInfo.scss'
export function VehicleInfo() {
    const [vehicle, setVehicle] = useState({});
    const params = useParams();

    useEffect(() => {
        getVehicleById(params.id).then(response => {
            setVehicle(response.data);
        })


    }, []);


    return (
        <div className="vehicle-info">
            <div className="info">
                <div className="text">
                <h2>{vehicle.brand} {vehicle.model}</h2>
                <p>Construction year: {vehicle.year}</p>
                <p>Fuel type: {vehicle.fuelType}</p>
                <p>Number of seats: {vehicle.numberOfSeats}</p>
                <p>Price/day: {vehicle.pricePerDay}</p>
                <p>Available: {vehicle.count}</p>
                </div>
                <img src={vehicle.picture} alt="None" />
            </div>
        </div>

    )
}
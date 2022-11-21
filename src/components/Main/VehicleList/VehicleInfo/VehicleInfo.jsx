import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../../context/auth-context";
import { getVehicleById } from "../../../../utils/http-utils/vehicle-requests";
import './VehicleInfo.scss'
export function VehicleInfo() {
    const [vehicle, setVehicle] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        getVehicleById(params.id).then(response => {
            setVehicle(response.data);
        })
    }, []);
    const editVehicle = () => {
        navigate(`/vehicle-list/edit/${vehicle.id}`);
    }


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
                    {user && user.role === 'admin' &&
                        <button onClick={editVehicle}>Edit</button>
                    }
                </div>
                <img src={vehicle.picture} alt="None" />
            </div>
        </div>

    )
}
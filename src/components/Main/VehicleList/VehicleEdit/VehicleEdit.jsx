import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { saveUser } from "../../../../utils/http-utils/user-requests";
import { getVehicleById, updateVehicle } from "../../../../utils/http-utils/vehicle-requests";
import './VehicleEdit.scss'
export function VehicleEdit() {
    const [vehicle, setVehicle] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getVehicleById(params.id).then(response => {
            setVehicle(response.data);
        })

    }, []);
    function onFormSubmit(е) {
        е.preventDefault();
        updateVehicle(vehicle).then(response => {
            navigate(`/vehicle-list/${vehicle.id}`);
        })

    }
    const onInputChange = (e) => {
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
    }
    const cancel = () => {
        navigate(`/vehicle-list/${vehicle.id}`);
    }

    return (
        <div className="vehicle-edit">
            <div className="info">

                {/* {error && <p className="error">{error}</p>} */}

                <form onSubmit={onFormSubmit}>
                    <h3>Edit Vehicle</h3>
                    <h4>{vehicle.brand} {vehicle.model}</h4>
                    <hr />
                    <div className="row">
                        <label htmlFor="year"><b>Construction year</b></label>
                        <input value={vehicle.year} onChange={onInputChange} type="text" placeholder="Enter year" name="year" id="year" required />
                    </div>
                    <div className="row">
                        <label htmlFor="fuelType"><b>Fuel type</b></label>
                        <input value={vehicle.fuelType} onChange={onInputChange} type="text" placeholder="Enter fuel type" name="fuelType" id="fuelType" required />
                    </div>
                    <div className="row">
                        <label htmlFor="numberOfSeats"><b>Number of seats</b></label>
                        <input value={vehicle.numberOfSeats} onChange={onInputChange} type="number" placeholder="Enter number of seats" name="numberOfSeats" id="numberOfSeats" required />
                    </div>
                    <div className="row">
                        <label htmlFor="pricePerDay"><b>Price/day</b></label>
                        <input value={vehicle.pricePerDay} onChange={onInputChange} type="number" placeholder="Enter price per day" name="pricePerDay" id="pricePerDay" required />
                    </div>
                    <div className="row">
                        <label htmlFor="picture"><b>Image url</b></label>
                        <input value={vehicle.picture} onChange={onInputChange} type="text" placeholder="Enter image url" name="picture" id="picture" required />
                    </div>
                    <button type="submit" className="registerbtn">Save</button>
                    <button className="registerbtn" onClick={cancel}>Cancel</button>


                </form>

            </div >
        </div >

    )
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './VehicleAdd.scss'
import { createVehicle } from "../../../../utils/http-utils/vehicle-requests";

export function VehicleAdd() {
    const navigate = useNavigate();

    const [vehicle, setVehicle] = useState({
        brand: '',
        model: '',
        year: 0,
        fuelType: '',
        numberOfSeats: 0,
        pricePerDay: 0,
        picture: '',
        count: 0,
        type: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        vehicle.numberOfSeats = Number(vehicle.numberOfSeats);
        vehicle.pricePerDay = Number(vehicle.pricePerDay);
        vehicle.year = Number(vehicle.year);
        vehicle.count = Number(vehicle.count);
        console.log(vehicle);
        createVehicle(vehicle);
        navigate('/vehicle-list');
    }
    const cancel = () => {
        navigate('/vehicle-list');
    }
    const onInputChange = (e) => {

        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
    }

    return (
        <div className="vehicle-add">
            <form action="" onSubmit={onFormSubmit}>

                <h3>Add Vehicle</h3>
                <hr />
                <div className="row">
                    <label htmlFor="brand"><b>Brand</b></label>
                    <input value={vehicle.brand} onChange={onInputChange} type="text" placeholder="Enter brand" name="brand" id="brand" required />
                </div>
                <div className="row">
                    <label htmlFor="model"><b>Model</b></label>
                    <input value={vehicle.model} onChange={onInputChange} type="text" placeholder="Enter model" name="model" id="model" required />
                </div>
                <div className="row">
                    <label htmlFor="year"><b>Construction year</b></label>
                    <input value={vehicle.year} onChange={onInputChange} type="text" placeholder="Enter year" name="year" id="year" required />
                </div>
                <div className="row">
                    <label htmlFor="fuelType"><b>Fuel type</b></label>
                    <select value={vehicle.fuelType} onChange={onInputChange} placeholder="Enter fuel type" name="fuelType" id="fuelType" required >
                        <option value="" selected disabled hidden>--Choose here--</option>
                        {['Diesel', 'Electric', 'Hybrid', 'Petrol'].map((fuelType, index) => {
                            return <option key={index} value={fuelType}>{fuelType}</option>
                        })}
                    </select>

                </div>
                <div className="row">
                    <label htmlFor="numberOfSeats"><b>Number of seats</b></label>
                    <input value={vehicle.numberOfSeats} onChange={onInputChange} type="text" placeholder="Enter number of seats" name="numberOfSeats" id="numberOfSeats" required />
                </div>
                <div className="row">
                    <label htmlFor="picture"><b>Image url</b></label>
                    <input value={vehicle.picture} onChange={onInputChange} type="text" placeholder="Enter image url" name="picture" id="picture" required />
                </div>
                <div className="row">
                    <label htmlFor="pricePerDay"><b>Price per day</b></label>
                    <input value={vehicle.pricePerDay} onChange={onInputChange} type="text" placeholder="Enter price per day" name="pricePerDay" id="pricePerDay" required />
                </div>
                <div className="row">
                    <label htmlFor="count"><b>Count</b></label>
                    <input value={vehicle.count} onChange={onInputChange} type="text" placeholder="Enter count" name="count" id="count" required />
                </div>
                <div className="row">
                    <label htmlFor="type"><b>Type</b></label>
                    <select value={vehicle.type} onChange={onInputChange} placeholder="Enter type" name="type" id="type" required >
                        <option value="" selected disabled hidden>--Choose here--</option>
                        {['economy', 'estate', 'luxury', 'SUV', 'cargo'].map((type, index) => {
                            return <option key={index} value={type}>{type}</option>
                        })}
                    </select>
                </div>


                <button className="registerbtn" type="submit">Add</button>
                <button className="registerbtn" onClick={cancel}>Cancel</button>


            </form>


        </div>
    );
}
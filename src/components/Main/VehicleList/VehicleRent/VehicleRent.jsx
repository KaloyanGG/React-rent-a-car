import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../../context/auth-context";
import { rent } from "../../../../utils/renting";
import './VehicleRent.scss'

export function VehicleRent() {

    const params = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [rentalEvent, setRentalEvent] = useState({
        vehicleId: params.id,
        customerId: user.id,
        startDate: '',
        endDate: '',
    });
    const onInputChange = (e) => {
        setRentalEvent({ ...rentalEvent, [e.target.name]: e.target.value });
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        rent(rentalEvent, user);
        navigate('/rentals');
    }

    return (

        <div className="vehicle-rent">
            <form onSubmit={onFormSubmit}>
                <div className="row">
                    <label htmlFor="startDate">Start date</label>
                    <input value={rentalEvent.startDate}
                        onChange={onInputChange} type="date"
                        placeholder="Enter start date" name="startDate" id="startDate" required></input>
                </div>
                <div className="row">
                    <label htmlFor="endDate">End date</label>
                    <input value={rentalEvent.endDate}
                        onChange={onInputChange} type="date"
                        placeholder="Enter end date" name="endDate" id="endDate" required></input>

                </div>
                <div className="row">
                    <button type="submit">Rent</button>
                </div>
            </form>
        </div>

        //TODO add rent functionality



    )




}

import { useEffect, useState } from 'react';
import { getAllRentalEvents } from '../../utils/http-utils/rental-event-requests';
import './Rentals.scss'

export function Rentals() {

    const [rentals, setRentals] = useState([]);
    useEffect(() => {
        getAllRentalEvents().then(response => {
            setRentals(response.data);
        })
    }, [rentals]);
    

    return (
        <div className="rentals">
            <div className="container">
            <div className="rental">
                            <p>Start date</p>
                            <p>End Date</p>
                            <p>Vehicle ID</p>
                            <p>Customer ID</p>
                            <p>Discount %</p>
                        </div>
                {rentals.map(rental => {
                    return (
                        <div className="rental" key={rental.id}>
                            <p>{rental.startDate}</p>
                            <p>{rental.endDate}</p>
                            <p>{rental.vehicleId}</p>
                            <p>{rental.customerId}</p>
                            <p>{rental.discount}</p>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}
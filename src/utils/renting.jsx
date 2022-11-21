import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { getAllRentalEvents, saveRentalEvent } from "./http-utils/rental-event-requests";
import { getVehicleById, reduceVehicleAvailability } from "./http-utils/vehicle-requests";

export async function rent(rentalEvent, user) {
    // If the rental period is:
    // More than 3 days - 5% discount
    // More than 5 days - 7% discount
    // More than 10 days - 10% discount
    // If a customer has rented a vehicle more than 3 times in the last 60 days, they would be designated as
    // VIP customers and get a discount of 15%.

    const startDate = new Date(rentalEvent.startDate);
    const endDate = new Date(rentalEvent.endDate);
    const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
    let discount = 0;

    if (days < 1) {
        alert('The rental period must be at least 1 day');
        return;
    }
    if(!(await reduceVehicleAvailability(rentalEvent.vehicleId))){
        return;
    };


    if (days > 10) {
        discount = 10;
    } else if (days > 5) {
        discount = 7;
    } else if (days > 3) {
        discount = 5;
    }

    let allRentalsOfUserInTheLast60Days = (await getAllRentalEvents())
        .data
        .filter(rental => rental.customerId === user.id && new Date(rental.startDate) > new Date(new Date().setDate(new Date().getDate() - 60)));


    console.log(allRentalsOfUserInTheLast60Days);
    if (allRentalsOfUserInTheLast60Days.length >= 2) {
        discount = 15;
    }
    rentalEvent.discount = discount;
    let vehicle = (await getVehicleById(rentalEvent.vehicleId)).data;

    saveRentalEvent(rentalEvent);

    alert(`You have rented the vehicle for ${days} days. The total price is ${(vehicle.pricePerDay * days * (1 - discount / 100)).toFixed(2)}$`);

}
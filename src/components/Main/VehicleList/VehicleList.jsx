import { useEffect, useState } from "react";
import { deleteVehicleById, getVehicles } from "../../../utils/http-utils/vehicle-requests";
import { VehicleCard } from "./VehicleCard/VehicleCard";
import './VehicleList.scss';

export function VehicleList() {

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {

    getVehicles().then(response => {
      setVehicles(response.data);
    })

  }, []);
  //document.querySelector("[href='/vehicle-list']").classList.add('bg-red');

  const onDeleteHandler = async (id) => {
    await deleteVehicleById(id);
    setVehicles(prevVehicles => {
      return prevVehicles.filter(vehicle => vehicle.id !== id);
    });
  }


  return (
    <div className="vehicle-list" >

      {vehicles.map(vehicle => {
        return <VehicleCard key={vehicle.id}
          vehicle={vehicle}
          deleteVehicle={onDeleteHandler} />
      })}
    </div>
  );
}
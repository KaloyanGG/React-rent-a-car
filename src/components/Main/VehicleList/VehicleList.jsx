import { useEffect, useState } from "react";
import { getVehicles } from "../../../utils/http-utils/vehicle-requests";
import { VehicleCard } from "./VehicleCard/VehicleCard";
import './VehicleList.scss';

export function VehicleList() {

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {

    getVehicles().then(response => {
      setVehicles(response.data);
    })

  }, []);


  return (
    <div className="vehicle-list" >

      {vehicles.map(vehicle => {
        return <VehicleCard key={vehicle.id} vehicle={vehicle} />
      })}
    </div>
  );
}
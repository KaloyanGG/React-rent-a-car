import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";
import { deleteVehicleById, getVehicles } from "../../../utils/http-utils/vehicle-requests";
import { VehicleCard } from "./VehicleCard/VehicleCard";
import './VehicleList.scss';

export function VehicleList() {

  const [vehicles, setVehicles] = useState([]);
  const {user} = useContext(AuthContext);

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
      {user &&
        <div className="link-container">
          <Link to="/vehicle-list/add" className="add">
            Add vehicle
          </Link>
        </div>}
      {vehicles.map(vehicle => {
        return <VehicleCard key={vehicle.id}
          vehicle={vehicle}
          deleteVehicle={onDeleteHandler} />
      })}

    </div>
  );
}
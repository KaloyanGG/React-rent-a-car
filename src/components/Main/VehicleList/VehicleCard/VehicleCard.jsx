import { useNavigate } from 'react-router-dom'
import './VehicleCard.scss'

export function VehicleCard({ vehicle, deleteVehicle }) {

    const navigate= useNavigate();

    const showDetails = () => {
        navigate(`/vehicle-list/${vehicle.id}`);
    };
    //async function deleteVehicle(){
    //    await deleteVehicleById(vehicle.id);
    //    navigate('/vehicle-list'); //! WHY NOT WORKING??
    //    
    //};

    return (
        <div className="vehicle-card">
            <div className="info">
                <h2>{vehicle.brand}</h2>
                <h3>{vehicle.model}</h3>

            </div>
            <div className='buttons'>
                <button>
                    Rent
                </button>
                <button onClick={()=>showDetails()}>
                    Details
                </button>
                <button onClick={()=>deleteVehicle(vehicle.id)}>
                    Delete
                </button>
            </div>
            <img src={vehicle.picture} alt="None" />

        </div >
    )
}
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../../context/auth-context';
import './VehicleCard.scss'

export function VehicleCard({ vehicle, deleteVehicle }) {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const showDetails = () => {
        navigate(`/vehicle-list/${vehicle.id}`);
    };

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
                <button onClick={() => showDetails()}>
                    Details
                </button>
                {user &&
                    <button onClick={() => deleteVehicle(vehicle.id)}>
                        Delete
                    </button>
                }
            </div>
            <img src={vehicle.picture} alt="None" />

        </div >
    )
}
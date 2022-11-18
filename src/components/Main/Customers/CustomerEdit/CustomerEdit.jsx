import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../../context/auth-context";
import { getUserById, updateUser } from "../../../../utils/http-utils/user-requests";

export function CustomerEdit() {

    const { user, userLogout } = useContext(AuthContext);

    const [userC, setUserC] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getUserById(params.id).then(response => {
            setUserC(response.data);
        })

    }, []);

    function onFormSubmit(е) {
        е.preventDefault();
        updateUser(userC).then(response => {
            navigate(`/customers`);
            userLogout();
            alert('You have been Logged Out!');
        })

    }
    const onInputChange = (e) => {
        setUserC({ ...userC, [e.target.name]: e.target.value });
    }
    const cancel = () => {
        navigate(`/customers`);
    }



    return (
        <div className="vehicle-edit">
            <div className="info">
                {/* {error && <p className="error">{error}</p>} */}

                <form onSubmit={onFormSubmit}>
                    <h3>Edit User</h3>
                    <h4>{userC.name}</h4>
                    <hr />
                    <div className="row">
                        <label htmlFor="name"><b>Name</b></label>
                        <input value={userC.name} onChange={onInputChange} type="text" placeholder="Enter name" name="name" id="name" required />
                    </div>
                    <div className="row">
                        <label htmlFor="email"><b>Email</b></label>
                        <input value={userC.email} onChange={onInputChange} type="text" placeholder="Enter email" name="email" id="email" required />
                    </div>
                    <div className="row">
                        <label htmlFor="phoneNumber"><b>Phone number</b></label>
                        <input value={userC.phoneNumber} onChange={onInputChange} type="text" placeholder="Enter phone number" name="phoneNumber" id="phoneNumber" required />
                    </div>
                    <button type="submit" className="registerbtn">Save</button>
                    <button className="registerbtn" onClick={cancel}>Cancel</button>


                </form>

            </div >
        </div >

    )

}
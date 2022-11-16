import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllUsers, saveUser } from '../../../utils/http-utils/user-requests';
import './Register.scss'
export function Register() {

    const [phoneError, setPhoneError] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: ''
    });
    const onInputChange = (e) => {
        setPhoneError(false);
        if (e.target.name === 'phoneNumber') {
            if (!/^[0-9]*$/.test(e.target.value)) {
                setPhoneError(true);
                return;
            };
        }
        //console.log(e.target);
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);

    }
    const onFormSubmit = async (e) => {
        e.preventDefault();
        if (user.password !== document.querySelector('#psw-repeat').value) {
            alert('Passwords do not match');
            return;
        }
        if (await emailExists(user.email)) {
            alert('Account with this email already exists');
            return;
        }

        saveUser(user).then(response => {
            console.log("Saved user: ");
            console.log(user.toString());
            navigate('/login');
        })
    }

    return (
        <div className="register">
            <form onSubmit={onFormSubmit}>
                <div className="container">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <label for="name"><b>Name</b></label>
                    <input value={user.name} onChange={onInputChange} type="text" placeholder="Enter Full name" name="name" id="name" required />

                    <label for="email"><b>Email</b></label>
                    <input value={user.email} onChange={onInputChange} type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label for="phoneNumber"><b>Phone Number</b></label>
                    <input value={user.phoneNumber} onChange={onInputChange} type="text" placeholder="Enter Phone Number" name="phoneNumber" id="phoneNumber" />
                    {phoneError && <p className="error">Phone number must contain only numbers</p>}

                    <label for="password"><b>Password</b></label>
                    <input value={user.password} onChange={onInputChange} type="password" placeholder="Enter Password" name="password" id="password" required />

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                    <hr />

                    <button type="submit" className="registerbtn">Register</button>
                </div>

                {/*    <div className="container signin">
                    <p>Already have an account? <a href="#">Sign in</a>.</p>
                </div> */}
            </form>




        </div>
    );
}

async function emailExists(email) {

    let users = (await getAllUsers()).data;

    for (const user of users) {
        if (user.email === email) {
            return true;
        }
    }
    return false;

}
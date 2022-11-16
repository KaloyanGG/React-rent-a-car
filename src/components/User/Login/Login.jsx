import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/auth-context';
import { login } from '../../../utils/http-utils/user-requests';
import './Login.scss'
export function Login() {

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const {userLogin} = useContext(AuthContext);
    const [user, setUser] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: ''
    });
    const onInputChange = (e) => {
        setError('');
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onBlur = (e) => {
        console.log(user);
    }
    const onFormSubmit = async (e) => {
        e.preventDefault();

        login(user).then(response => {
            console.log("Logged in user: ");
            console.log(user);

            userLogin(response);

            navigate('/vehicle-list');
        }).catch(error => {
            console.log('Error:');
            console.log(error);
            setError(error.message);
        });
    }

    return (
        <div className="login">
            <form onSubmit={onFormSubmit}>
                <div className="container">
                    {error && <p className="error">{error}</p>}
                    <h1>Login</h1>
                    <p>Please fill in this form to login into an account.</p>
                    <hr />

                    <label for="email"><b>Email</b></label>
                    <input value={user.email} onChange={onInputChange} onBlur={onBlur} type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label for="password"><b>Password</b></label>
                    <input value={user.password} onChange={onInputChange} onBlur={onBlur} type="password" placeholder="Enter Password" name="password" id="password" required />

                    <button type="submit" className="registerbtn">Login</button>
                </div>

            </form>




        </div>
    );
}


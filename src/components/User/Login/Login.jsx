import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/auth-context';
import { login } from '../../../utils/http-utils/user-requests';
import './Login.scss'
export function Login() {

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { userLogin } = useContext(AuthContext);
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        phoneNumber: '',
        password: ''
    });
    const onInputChange = (e) => {
        setError('');
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onFormSubmit = async (e) => {
        e.preventDefault();

        login(user).then(response => {

            userLogin({id: response.id,name: response.name, email: response.email, role: response.role });

            navigate('/vehicle-list');
        }).catch(error => {
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

                    <label htmlFor="email"><b>Email</b></label>
                    <input value={user.email} onChange={onInputChange} type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label htmlFor="password"><b>Password</b></label>
                    <input value={user.password} onChange={onInputChange} type="password" placeholder="Enter Password" name="password" id="password" required />

                    <button type="submit" className="registerbtn">Login</button>
                </div>

            </form>




        </div>
    );
}


import { Link } from 'react-router-dom'
import './Header.scss'
//Header
export function Header({ user }) {

    return (
        <header className="header">
            <nav>
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <ul role="list">
                    <li><Link to="/vehicle-list">Vehicle List</Link></li>
                    <li><Link to="/customers">Customers</Link></li>
                    <li><Link to="/rentals">Rentals</Link></li>
                    {user && <>
                        <li><Link to="/logout">Logout</Link></li>
                    </>
                    }
                    {!user && <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>}
                </ul>
            </nav>
        </header>
    )
} 
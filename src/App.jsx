import { useState } from 'react';
import './App.scss'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { getLoggedUser, Main } from './components/Main/Main';
import { AuthContext } from './context/auth-context';


function App() {

    const [user, setUser] = useState(getLoggedUser() || null);

    function userLogin(data) {
        setUser(data);
    }
    function userLogout() {
        setUser(null);
    }

    return (

        <AuthContext.Provider value={{ user, userLogin, userLogout }}>
            <div>
                <Header user={user}/>
                <Main />
                <Footer />
            </div>
        </AuthContext.Provider>

    )
}

export default App;
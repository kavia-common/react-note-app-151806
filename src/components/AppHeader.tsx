import React from 'react';
import AuthContext from '../context/AuthContext';
import {Link} from 'react-router-dom';

const AppHeader: React.FC = () => {
    const {user} = React.useContext(AuthContext);

    const headerLinks = () => {
        if (user) {
            return (
                <div className="h-full w-1/2 flex justify-center">
                    <span>Logout</span>
                </div>
            );
        }
        return (
            <section className="w-1/6 block h-full">
                <div className="h-full w-1/2 flex justify-center">
                    <Link to="/login">
                        <span>Login</span>
                    </Link>
                </div>
                <div className="h-full w-1/2 flex justify-center">
                    <Link to="/register">
                        <span>Register</span>
                    </Link>
                </div>
            </section>
        );
    };

    return (
        <header className="w-full">
            <section className="w-2/6 flex justify-center">Derozan</section>
            <div className="w-3/6 block m-0" />
            {headerLinks()}
        </header>
    );
};

export default AppHeader;

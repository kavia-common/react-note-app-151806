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
            <section className="w-1/6 flex h-full">
                <div className="h-full w-1/2 flex justify-center">
                    <Link to="/login" className="m-auto h-8 text-2xl leading-tight">
                        <span>Login</span>
                    </Link>
                </div>
                <div className="h-full w-1/2 flex justify-center">
                    <Link to="/register" className="m-auto h-8 text-2xl leading-tight">
                        <span>Register</span>
                    </Link>
                </div>
            </section>
        );
    };

    return (
        <header className="w-full flex h-16 text-white absolute left-0 right-0 top-0 bg-teal-600 shadow-lg">
            <section className="w-2/6 flex justify-center">
                <h1 className="m-auto h-12 text-4xl leading-tight">Derozan</h1>
            </section>
            <div className="w-3/6 block m-0" />
            {headerLinks()}
        </header>
    );
};

export default AppHeader;

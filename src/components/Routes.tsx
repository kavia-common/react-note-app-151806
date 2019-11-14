import React from 'react';
import {Route, RouteProps, Redirect} from 'react-router-dom';
import {IUser} from '../types/index';
import AuthContext from '../context/AuthContext';
import About from './About';
import Home from './Home';

interface IProtectedRoute extends RouteProps {
    authenticated: null | IUser;
    redirectPath: string;
}

class ProtectedRoute extends Route<IProtectedRoute> {
    public render() {
        const {authenticated, redirectPath} = this.props;

        if (!authenticated) {
            return <Redirect to={redirectPath} />;
        }

        return <Route {...this.props} />;
    }
}

class AuthRoute extends Route<IProtectedRoute> {
    public render() {
        const {authenticated, redirectPath} = this.props;

        if (!authenticated) {
            return <Route {...this.props} />;
        }
        return <Redirect to={redirectPath as string} />;
    }
}

const Routes: React.FC = () => {
    const {user} = React.useContext(AuthContext);

    return (
        <React.Fragment>
            <AuthRoute path="/" authenticated={user} redirectPath="/home" component={About} />
            <ProtectedRoute path="/home" authenticated={user} redirectPath="/" component={Home} />
        </React.Fragment>
    );
};

export default Routes;

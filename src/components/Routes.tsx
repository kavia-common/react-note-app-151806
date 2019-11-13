import React from 'react';
import {Route, RouteProps, Redirect, Switch} from 'react-router-dom';
import {IUser} from '../types/index';

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
    return (
        <React.Fragment>
            <Route path='/' render={() => <div>Home</div>} />
        </React.Fragment>
    );
};

export default Routes;

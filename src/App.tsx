import React from 'react';
import './App.css';
import AppContext from './context/AppContext';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Routes from './components/Routes';
import {BrowserRouter} from 'react-router-dom';

const App: React.FC = () => {
    return (
        <div>
            <AppContext>
                <AppHeader />
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
                <AppFooter />
            </AppContext>
        </div>
    );
};

export default App;

import React from 'react';
import './App.css';
import AppContext from './context/AppContext';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Routes from './components/Routes';
import {BrowserRouter} from 'react-router-dom';

const App: React.FC = () => {
    return (
        <div className="container p-3 relative h-full ml-10 mr-10">
            <AppContext>
                <AppHeader />
                <BrowserRouter>
                    <div className="w-full">
                    <Routes />
                    </div>
                </BrowserRouter>
                <AppFooter />
            </AppContext>
        </div>
    );
};

export default App;

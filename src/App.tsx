import React from 'react';
import './App.css';
import AppContext from './context/AppContext';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Routes from './components/Routes';

const App: React.FC = () => {
    return (
        <div className="container p-3 h-full m-auto">
                <AppContext>
                    <AppHeader />
                    <div className="w-full mt-20">
                        <Routes />
                    </div>
                    <AppFooter />
                </AppContext>
        </div>
    );
};

export default App;

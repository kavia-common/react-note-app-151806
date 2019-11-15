import React from 'react';
import './App.css';
import AppContext from './context/AppContext';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Routes from './components/Routes';

const App: React.FC = () => {
    return (
        <div className="container p-3 relative h-full ml-10 mr-10">
                <AppContext>
                    <AppHeader />
                    <div className="w-full">
                        <Routes />
                    </div>
                    <AppFooter />
                </AppContext>
        </div>
    );
};

export default App;

import React, { useState, createContext } from 'react';
import './App.css';
import Boxing from './components/boxing/boxing';
import NewYearFireworks from './components/confeti/confeti';

export const IsNew = createContext(false);

const App = () => {
    const [isNewYear, setIsNewYear] = useState(false);

    return (
        <div className="App">
            <IsNew.Provider value={{ isNewYear, setIsNewYear }}>
                <Boxing />
                {isNewYear ? <NewYearFireworks /> : <div></div>}
            </IsNew.Provider>
        </div>
    );
};

export default App;
import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {CharactersList} from "./body/CharactersList";

function App() {
    return (
        <div className="App">
            <Header/>
            <CharactersList/>
        </div>
    );
}

export default App;
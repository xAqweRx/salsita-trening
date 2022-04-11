import React, {FunctionComponent, useState} from 'react';
import './App.css';
import {UserList} from "./UserList";

function App() {
    const userNames: string[] = [
        "Harry Potter",
        "Ron Weasley",
        "Hermione Granger",
        "Voldmort",
        "Neville Longbottom"
    ];

    return (
        <div className="App">
            <Header />
            <UserList userNames={userNames}>
            </UserList>
        </div>
    );
}

export default App;

const Header: FunctionComponent = () => {
    const [name, setName] = useState<string>('Stranger');
    const [age, setAge] = useState<number>(30);

    const incrementAge = () => {
        setAge(age + 1)
    }

    return (
        <div>
            Welcome to our site, {name}, you are {age} years old!
            <button onClick={incrementAge}>Increase age</button>
        </div>
    )
}
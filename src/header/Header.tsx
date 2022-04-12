import {FunctionComponent, useCallback, useState} from 'react';
import './Header.css';
import {Nav} from "./Nav/Nav";
import * as React from "react";

type Props = {};

export const Header: FunctionComponent = (props: Props) => {
    const [age, setAge] = useState(30);

    const clickHandler = useCallback(() => {
        setAge(age + 1)
    }, [setAge, age])

    return (
        <div className="header">
            <div>
                Your age : {age}
                <button onClick={clickHandler}>add Age</button>
                <Nav/>
            </div>
            
        </div>
    );
};
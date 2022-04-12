import {FunctionComponent, useState} from 'react';
import './Header.css';
import {Nav} from "./Nav/Nav";
import * as React from "react";

type Props = {};

export const Header: FunctionComponent = (props: Props) => {
    const [age, setAge] = useState(30);
    return (
        <div className="header">
            Your age : {age}

            <button onClick={() => {
                setAge(age + 1)
            }}>add Age
            </button>

            <Nav/>
        </div>
    );
};
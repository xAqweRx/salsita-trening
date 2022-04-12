import {FunctionComponent, useState} from 'react';
import './Header.css';
import {Nav} from "./Nav/Nav";
import * as React from "react";
import {CharactersList} from "../body/CharactersList";

type Props = {};

export const Header: FunctionComponent = (props: Props) => {
    const [age, setAge] = useState(30);
    return (
        <div className="header">
            <div>
                Your age : {age}

                <button onClick={() => {
                    setAge(age + 1)
                }}>add Age
                </button>

                <Nav/>
            </div>
            
        </div>
    );
};
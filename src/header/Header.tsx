import {ChangeEvent, FunctionComponent} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../reduxInformation/store'
import './Header.css';
import {Nav} from "./Nav/Nav";
import * as React from "react";
import {decrement, increment, incrementByAmount} from "../reduxInformation/age/ageSlice";

type Props = {};

export const Header: FunctionComponent = (props: Props) => {
    const age = useSelector((state: RootState) => state.age.value);
    const dispatch = useDispatch();

    const clickMe = () => {
        dispatch(increment());
    }

    const clickMeReduce = () => {
        dispatch(decrement());
    }

    const addMultiple = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(incrementByAmount(event.target.value))
    }

    return (
        <div className="header">
            <div>
                Your age : {age}

                <button onClick={clickMe}>add Age</button>
                <button onClick={clickMeReduce}>reduce Age</button>

                <input onChange={addMultiple} placeholder={'Place more numbers'} type={"number"}/>
                <Nav/>
            </div>

        </div>
    );
};
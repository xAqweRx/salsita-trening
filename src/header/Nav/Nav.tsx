import {FunctionComponent, useState} from 'react';
import ChildButton from "../ChildButton/ChildButton";

type Props = {};

export const Nav: FunctionComponent = (props: Props) => {
        const [firstName, setFirstName] = useState('Stranger');
        const modelObject = {
            firstName: firstName,
            setFirstName: (input: string) => setFirstName(input)
        }

        return (
            <div>
                Hello, {firstName}
                <ChildButton model={modelObject}/>
            </div>
        );
    }
;
import {FunctionComponent} from 'react';

interface Props {
    items: string[];
};
export const ListItems: FunctionComponent<Props> = (props: Props) => {
    return (
        <div>
            <ul>
                {props.items.map(value => <li key={value}>{value}</li>)}
            </ul>
        </div>
    );
};
import {FunctionComponent, useMemo} from "react";
import './UserList.css';

interface Props {
    userNames: string[];
}

export const UserList: FunctionComponent<Props> = ({ userNames}) => {
    const sortedNames = useMemo(() => {
        return [...userNames].sort();
    }, [userNames])

    return (
        <div className={'list'}>
            {sortedNames.map(userName => (
                <li key={userName}>{userName}</li>
            ))}
        </div>
    )
}

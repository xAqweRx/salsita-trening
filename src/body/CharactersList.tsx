import {FunctionComponent, useEffect, useState} from 'react';
import {ListItems} from "./ListItems";
import {fetchAll, fetchFiltered} from "../api/users";

type Props = {};

export const CharactersList: FunctionComponent = (props: Props) => {

    const [userList, setUserList] = useState<string[]>([]);
    const [userListQueryFilter, setUserListQueryFilter] = useState<string>('');

    useEffect(() => {
        const fetchItems = async () => {
            const userList = await fetchAll();
            setUserList(userList);
        };
        void fetchItems();
    }, []);

    useEffect(() => {
        const fetchItems = async () => {
            const userList = await fetchFiltered(userListQueryFilter);
            setUserList(userList);
        };
        void fetchItems();
    }, [userListQueryFilter]);


    return (
        <div>
            <input data-testid={'user search'} placeholder={'Start to type name of a Character'}
                   onChange={(event) => setUserListQueryFilter(event.target.value)}/>
            <ListItems items={userList}/>
        </div>
    );
};
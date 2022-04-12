import {FunctionComponent} from 'react';
import {useParams} from "react-router-dom";
import {LoadingStatus, useCharacterApi} from "../hooks/useCharacterApi";

type Props = {};

export const Character: FunctionComponent = (props: Props) => {
    const { id = '' } = useParams();

    const { name, loadingStatus } = useCharacterApi(id);

    return (
        <div>
            <h1>
                This is the character detail page
            </h1>
            {
                loadingStatus === LoadingStatus.loading ? (
                    <div>loading....</div>
                ): (
                    <div>
                        Character name: {name}
                    </div>
                )
            }
        </div>
    )
};
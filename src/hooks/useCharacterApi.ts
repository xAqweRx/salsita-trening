import {useEffect, useState} from "react";
import {fetchCharacterDetails} from "../api/users";

export enum LoadingStatus {
    notStarted,
    loading,
    finished,
    error
}

export const useCharacterApi = (id: string) => {
    const [name, setName] = useState<string>('')
    const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>(LoadingStatus.notStarted)

    useEffect(() => {
        const fetch = async () => {
            try {
                setLoadingStatus(LoadingStatus.loading)
                const details = await fetchCharacterDetails(Number(id))
                setLoadingStatus(LoadingStatus.finished)
                setName(details)
            } catch(e) {
                setLoadingStatus(LoadingStatus.error)
            }
        }

        void fetch()
    }, [id]);

    return {
        name,
        loadingStatus
    };
}
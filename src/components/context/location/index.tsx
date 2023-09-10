import React, { ReactNode, useState } from 'react';
import GetLocation from './getLocation';
import { locationContext } from '../getContext';


export default function LocationProvider({ children }: { children: ReactNode }) {
    const baseUrl = 'https://rickandmortyapi.com/api'
    const getPage = localStorage.getItem('pageLocation')?.toString() ?? '1';

    const [getNewData, setGetNewData] = useState<boolean>(false);

    const { location, pages } = GetLocation({
        getPage,
        baseUrl,
        getNewData,
        setGetNewData
    })

    const data = {
        location,
        pages
    }

    return (
        <locationContext.Provider value={{ data, getNewData, setGetNewData }}>
            {children}
        </locationContext.Provider>
    )
}
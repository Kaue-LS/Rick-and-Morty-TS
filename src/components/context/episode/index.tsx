import React, { ReactNode, useState } from 'react';
import { episodeContext } from '../getContext'
import GetEpisode from './getEpisode';

export default function EpisodeProvider({ children }: { children: ReactNode }) {
    // base address on api
    const baseUrl = 'https://rickandmortyapi.com/api';
    // -------------------
    const getPage = localStorage.getItem('pageEpisode')?.toString() ?? '1';
    const [getNewData, setGetNewData] = useState<boolean>(false);

    const { episodes, pages } = GetEpisode({
        getPage,
        baseUrl,
        getNewData,
        setGetNewData
    });

    const data = {
        episodes,
        pages
    };

    return (
        <episodeContext.Provider value={{ data, getNewData, setGetNewData }}>
            {children}
        </episodeContext.Provider>
    );
}

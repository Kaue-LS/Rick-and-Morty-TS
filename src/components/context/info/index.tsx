import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { infoContextProps } from '../context.types';
import { infoContext } from '../getContext';

export default function InfoProvider({ children }: { children: ReactNode }) {

    const [infoData, setInfoData] = useState<infoContextProps>()

    const getInfoData = useCallback(async () => {
        const baseUrl = [
            'https://rickandmortyapi.com/api/character',
            'https://rickandmortyapi.com/api/episode',
            'https://rickandmortyapi.com/api/location',
        ]
        try {
            const characterResponse = await fetch(baseUrl[0]);
            const characterData = await characterResponse.json();

            const locationResponse = await fetch(baseUrl[1]);
            const locationData = await locationResponse.json();

            const episodeResponse = await fetch(baseUrl[2]);
            const episodeData = await episodeResponse.json();

            setInfoData({
                character: {
                    info: {
                        count: characterData.info.count
                    }
                },
                location: {
                    info: {
                        count: locationData.info.count
                    }
                },
                episode: {
                    info: {
                        count: episodeData.info.count
                    }
                }
            })
        } catch (err) {
            // eslint-disable-next-line 
            console.error(err)
        }

    }, [])

    useEffect(() => {
        getInfoData()
    }, [getInfoData])

    if (!infoData) {
        // Aguardar o carregamento dos dados
        return null;
    }
    return (
        <>
            {<infoContext.Provider value={infoData}>
                {children}
            </infoContext.Provider>
            }
        </>
    )
}
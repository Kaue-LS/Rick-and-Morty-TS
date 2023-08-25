import React from 'react'
import { UseEpisodeContext } from '../context/getContext'
export default function EpisodeList() {
    const { useEpisodeContext } = UseEpisodeContext()
    const { data } = useEpisodeContext

    // eslint-disable-next-line
    console.log({ data })
    return (
        <div className='e-episodeList__container'>
            {data.episodes.map((item) => (
                <div key={item.id} className='e-episodeList__container__card' >
                    <span>#{item.id}</span>
                    <h3 >{item.name}</h3>
                    <p>{item.air_date}</p>
                </div>
            ))}
        </div>
    )
}
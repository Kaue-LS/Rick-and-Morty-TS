import React from 'react'
import { UseEpisodeContext } from '../../context/getContext'
export default function EpisodeList() {
    const { useEpisodeContext } = UseEpisodeContext()
    const { data } = useEpisodeContext

    return (
        <div className='e-episodeList__container'>
            {data.episodes.map((item) => (
                <div key={item.id} className='e-episodeList__container__card' >
                    <div className='e-episodeList__container__card__name'>
                        <span>#{item.id}</span>
                        <h2 >{item.name}</h2>
                    </div>
                    <div className='e-episodeList__container__card__info'>
                        <span>{item.episode}</span>
                        <h3>{item.air_date}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}
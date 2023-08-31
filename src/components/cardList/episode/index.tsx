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
                        <h3 >{item.name}</h3>
                    </div>
                    <div className='e-episodeList__container__card__info'>
                        <span>{item.episode}</span>
                        <h4>{item.air_date}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}
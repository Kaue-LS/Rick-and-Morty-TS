import React from 'react';
import '../styles/css/styles.css';
import { UseInfoContext } from '../context/getContext';

export default function Info() {
    const { useInfoContext } = UseInfoContext()
    return (
        <div className='e-footer__info'>
            <h3>Info:</h3>
            <div>
                <label>
                    <p>Character:</p>
                    <span>{useInfoContext.character.info.count}</span>
                </label>
                <label>
                    <p>Episodes:</p>
                    <span>{useInfoContext.episode.info.count}</span>
                </label>
                <label>
                    <p>Locations:</p>
                    <span>{useInfoContext.location.info.count}</span>
                </label>
            </div>
        </div>
    )
}
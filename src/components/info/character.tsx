import React from 'react'
import type { CharacterProps } from '../context/context.types'
import { useLocation } from 'react-router-dom';


export default function CharacterDesc() {
    const { state } = useLocation();
    // eslint-disable-next-line
    console.log(state.data)
    return (
        <>
            teste
        </>
    )
}
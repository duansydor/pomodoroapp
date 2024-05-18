'use client'
import React, { useEffect } from 'react'

const RingingSound = ({ seconds, isStarted }: { seconds: Number, isStarted: Boolean }) => {
    
    useEffect(() => {
        audio.muted= true;

    }, [isStarted]);
    useEffect(() => {
        if (seconds === 0) {
            audio.muted=false;
            audio.play();
        }
    }, [seconds]);
    


    return (
        <div>
            
            {isStarted?'startado':'nao startado'}
        </div>
    )
}

export default RingingSound
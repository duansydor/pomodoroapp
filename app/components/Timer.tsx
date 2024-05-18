'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import MotivationalPhrases from './MotivationalPhrases';
import RingingSound from './RingingSound';

function Timer() {
    const [isStarted, setIsStarted] = useState(false); // Flag for timer state
    const [seconds, setSeconds] = useState(10); // Initial time in seconds (25 minutes)
    const [counter, setCounter] = useState(0)
    const soundUrl = '/sound.mp3';
    const audio = new Audio(soundUrl);

    // Function to handle decrementing the timer
    const decrement = () => {
        if (seconds > 0 && isStarted) {
            setSeconds(seconds - 1);
        }
    };
    // Function to handle timer start/pause
    const toggleStart = () => {
        audio.muted = true;
        setIsStarted(!isStarted);
    };
    useEffect(() => {
        if (seconds === 0) {
            audio.muted = false;
            audio.play()
        }
    }, [seconds])
    // useEffect hook to run the timer every second (if started)
    useEffect(() => {
        let intervalId: any;
        if (isStarted) {
            intervalId = setInterval(decrement, 1000);
        }
        if (seconds === 0 && counter === 0 && !isStarted) {
            setCounter(1)
            setSeconds(5)
            setIsStarted(false)

        } else if (seconds === 0 && counter === 1 && !isStarted) {
            setCounter(0)
            setSeconds(10)
            setIsStarted(false)

        }

        // if(seconds === )

        return () => {
            clearInterval(intervalId);
        } // Cleanup function to stop timer on unmount
    }, [isStarted, seconds]); // Run effect only when isStarted changes



    // Function to handle timer reset
    const reset = () => {
        setIsStarted(false);
        setSeconds(25 * 60); // Reset to initial time
    };

    // Display the timer in a user-friendly format (optional)
    const displayTime = () => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="text-2xl font-bold">Tap the clock to {isStarted ? 'pause' : 'start'}</h1>
            <Image
                src="clock.svg"
                alt="Clock Image"
                width="200"
                height="200"
                className={`hover:scale-105 duration-300 cursor-pointer ${seconds === 0 ? 'animate-shaking' : 'animate-none'}`}
                onClick={toggleStart}

            />
            {/* timer */}
            <div className="w-fit px-8 border-4 rounded-md border-gray-900 h-16 flex justify-center gap-2 items-center text-3xl font-bold">
                <span className=''>{displayTime()}</span>
            </div>
            <MotivationalPhrases counter={counter} />
        </div>
    );
}

export default Timer;
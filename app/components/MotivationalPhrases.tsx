import React, { useEffect, useState } from 'react'

const MotivationalPhrases = ({counter}:{counter:Number}) => {
    const [phrase,setPhrase] = useState("");
    useEffect(()=>{
        if(counter === 0){ 
            setPhrase(focusPhrases())
        }else{
            setPhrase(relaxPhrases())
        }
    },[counter])
    const focusPhrases = () => {
        const phrases = [
            "One thing at a time, one moment at a time.",
            "Focus on the present, not the past or future.",
            "Break down big tasks into smaller, manageable steps.",
            "Believe in your ability to focus.",
            "Celebrate your accomplishments, no matter how small.",
            "Remind yourself of your goals and why they are important to you."
        ]
        return phrases[Math.floor(Math.random() * phrases.length)]
    }
    const relaxPhrases = () => {
        const phrases = [
            "Recharge your mind and body for the next round.",
            "Step away and come back refreshed.",
            "A renewed focus awaits after a mindful break.",
            "You've got this! One step at a time.",
            "Hydrate and energize for the next sprint.",
            "Smile! You're making progress."
        ]
        return phrases[Math.floor(Math.random() * phrases.length)]
    }
    return (
        <span className='w-64 text-center text-md font-bold'>{phrase}</span>
    )
}

export default MotivationalPhrases
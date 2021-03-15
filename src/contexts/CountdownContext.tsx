import { createContext,ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";


interface CountdownProviderProps{
    children:ReactNode;
}

interface CountdownContextData {
    minutes:number,
    seconds:number,
    hasFinished:boolean,
    isActive:boolean,
    startCountdown:()=>void,
    resetCountdown:()=>void;
}

export const CountdownContext = createContext({} as CountdownContextData)



export function CountdownProvider({children}: CountdownProviderProps){

    const { startNewChallenge } = useContext(ChallengesContext)
    let  countdownTimeout = null
    const [time,setTime] = useState(30*60)
    const [isActive,setIsActive ] = useState(false)
    const [hasFinished,setHasFinished] = useState(false)

    const minutes = Math.floor(time/60)
    const seconds = time%60

    useEffect(()=>{  
        if(isActive && time > 0){
        countdownTimeout = setTimeout(()=>{
                setTime(time-1)
            },1000)
        } else if(isActive && time === 0 ){
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    },[isActive, time])

    const startCountdown = ()=>{    
        setIsActive(true)
    }

    const resetCountdown = ()=>{
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setHasFinished(false)
        setTime(30*60)
    }

    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}
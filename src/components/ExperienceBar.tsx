import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import classes from '../styles/components/ExperienceBar.module.css'


export default function experienceBar(){

    const { currentExperience,experienceToNextLevel } = useContext(ChallengesContext)
    const percentToNextLevel = Math.round(currentExperience*100)/experienceToNextLevel

    return(
        <header className={classes.experience_bar}>
            <span>0 xp</span>
            <div>
                <div style={{width:`${percentToNextLevel}%`}}/>
                <span className={classes.current_experience} style={{left:`${percentToNextLevel}%`}}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}


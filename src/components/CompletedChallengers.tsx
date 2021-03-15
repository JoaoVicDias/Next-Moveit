import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import classes from '../styles/components/CompletedChallengers.module.css'


export default function CompletedChallengers(){

    const { challengesCompleted } = useContext(ChallengesContext)


    return(
        <div className={classes.completed_challengers_conteiner}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}
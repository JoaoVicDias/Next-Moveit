import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import classes from '../styles/components/Profile.module.css'


export default function Profile(){

    const { level } = useContext(ChallengesContext)

    return(
        <div className={classes.profile_conteiner}>
            <img src="https://github.com/JoaoVicDias.png" alt="Imagem do usuario"></img>
            <div>
                <strong>João Victor Dias </strong>
                <p> <img src='icons/level.svg' alt="Level"/> Level {level}</p>
            </div>
        </div>
    )
}
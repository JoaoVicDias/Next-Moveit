import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import classes from '../styles/components/levelUpModal.module.css'

export function LevelUpModal(){

    const { level,CloseLevelUpModal } = useContext(ChallengesContext)

    return(
        <div className={classes.overlay}>
             <div className={classes.conteiner}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>
                <button type='button' onClick={CloseLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>  
        </div>
       
    )
}
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import classes from '../styles/components/ChallengeBox.module.css'

export default function ChallengeBox(){
    const { activeChallenge,resetChallenge,completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)


    function handleChallengeSucceded(){
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed(){
        resetChallenge()
        resetCountdown()
    }

    return(
        <div className={classes.challengebox__conteiner}>
           {
               activeChallenge? 
               <div className={classes.challengebox__active}>
                    <header>
                        Ganhe {activeChallenge.amount} xp
                    </header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{ activeChallenge.description }</p>
                    </main>
                    <footer>
                        <button type='button' className={classes.ChallengeBox_succeeded__button} onClick={handleChallengeSucceded}>Completei</button>
                        <button type='button' onClick={handleChallengeFailed} className={classes.ChallengeBox_falied__button}>Falhei</button>
                    </footer>
                </div>
                :<div className={classes.challengebox__not__active}>
                    <strong>
                    Finalize um ciclo para receber um desafio.
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt='Level Up'/>
                        Avance de level comletando desafios.
                    </p>
                </div>
           }
           </div>
        
    )
}
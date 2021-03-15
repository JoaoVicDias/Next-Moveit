import { useContext } from 'react'
import { CountdownContext} from '../contexts/CountdownContext'
import classes from '../styles/components/Countdown.module.css'


export default function Countdown(){
   

    const { isActive,
        minutes,
        seconds,
        hasFinished,
        resetCountdown,
        startCountdown } =useContext(CountdownContext)

    const [minuteLeft,minuteRigth] = String(minutes).padStart(2,'0').split('')
    const [secondLeft,secondRigth] = String(seconds).padStart(2,'0').split('')


    return(
        <div>
            <div className={classes.count_down_conteiner}> 
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRigth}</span>
                </div>
            </div>  

            {
                hasFinished  ?
                <button disabled className={classes.start_countdown_btn}>
                    Cliclo encerrado
                </button>
                :
                <>
                     { isActive?
                    <button 
                    type="button" 
                    onClick={resetCountdown} 
                    className={`${classes.start_countdown_btn} ${classes.start_countdown_btn__active} `}>
                        Abandonar ciclo
                    </button>
                    :
                    <button 
                    type="button" 
                    onClick={startCountdown} 
                    className={classes.start_countdown_btn}>
                        Iniciar um ciclo
                    </button>}
                </>
            }

           
            
        </div>
       
    )
}
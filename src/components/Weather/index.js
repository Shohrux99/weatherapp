import styles from './style.module.css'
import {useSelector} from 'react-redux'
import Clear from '../../assets/Clear.jpg';
import Clouds from '../../assets/clouds.jpg';
import Mist from '../../assets/mist.jpg';
import Rain from '../../assets/rain.jpg';
import Thunder from '../../assets/thunder.jpg';

function Weather() {
    const currentState = useSelector(state => state)
    return (
        <div className={styles.container} style={{backgroundImage: `url(${currentState.weather == 'Clear' ? Clear : (currentState.weather == 'Clouds' ? Clouds : (currentState.weather == 'Mist' ? Mist : (currentState.weather == 'Rain' ? Rain : (currentState.weather == 'Thunder' ? Thunder : null))))})`}}>
            <div className={styles.details}>
                <h1>{Math.round((currentState.temp-32)*5/30)}&deg;C</h1>
                <div className={styles.selector}>
                <span>
                    <p>{currentState.city}</p>
                    <p>{`${currentState.hours}:${currentState.minutes} - ${currentState.day}, ${currentState.month}`}</p>
                </span>
                <span>
                    <img src={`https://openweathermap.org/img/w/${currentState.icon}.png`}/>
                    <p>{currentState.weather}</p>
                </span>
                </div>
            </div>
        </div>
    )
}

export default Weather
import * as actions from "./actionType";
import axios from 'axios'

export const locationChanged = city => ({
    type: actions.LOCATION_CHANGED,
    payload: city
})
export const searchTerm = search => ({
    type: actions.SEARCH_TERM,
    payload: search
})
export const fetchWeatherRequest = () => ({
    type: actions.FETCH_WEATHER_REQUEST
})
export const fetchWeatherSuccess = info => ({
    type: actions.FETCH_WEATHER_SUCCESS,
    payload: info
})

export const fetchWeatherFailure = error => ({
    type: actions.FETCH_WEATHER_FAILURE,
    payload: error
})
export const fetchWeather = (city) => {
    return function(dispatch) {
        dispatch(fetchWeatherRequest)
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb567cd6507edbbe70d9c8013e62b8cb`)
            .then(res => {
                const info = res.data
                dispatch(fetchWeatherSuccess(info))
                console.log(fetchWeatherSuccess(info));
            }).catch(error => {
                dispatch(fetchWeatherFailure(error.message))
            })
    }
}


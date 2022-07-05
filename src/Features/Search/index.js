import React from 'react';
import styles from "./style.module.css";
import {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import {searchTerm} from '../../redux/actions'
import {fetchWeather} from "../../redux/actions";

const Search = () => {
    let [placeholder, setPlaceholder] = useState('Another location')

    const dispatch = useDispatch()
    let myFunc = () => dispatch(fetchWeather(placeholder))
    useEffect(()=>{
        dispatch(searchTerm(placeholder))
    }, [placeholder])
    function keydown(e) {
        if(e.key === 'Enter'){
            myFunc()
        }
    }
    let handleChange = (e) => {
        setPlaceholder(e.target.value)
    }
    // let handleSubmit = (e) => {
    //     e.prevetDefault()
    //     setPlaceholder(e.target.value)
    // }
    return (
        <div className={styles.search}>
            <input onKeyDown={keydown} placeholder={placeholder} onChange={handleChange}/>
            <button type='submit' onClick={myFunc}> <i className="fa-solid fa-magnifying-glass"></i> </button>
        </div>
    );
    
    
};

export default Search;
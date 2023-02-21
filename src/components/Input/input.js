import { useState } from "react";
import classes from './input.module.css';

const Input = () => {
    const [ newSearch, setNewSearch ] = useState('');
     const isShowChangeText = (text) => {
          setNewSearch(text);
         console.log(newSearch)
    }
    return (
        <div className={classes.Input}>
            <input type="text" placeholder="Search..." onChange={(event) =>  isShowChangeText(event.target.value)}/>
            <p>{newSearch}</p>
        </div>
    )
}


export default Input;
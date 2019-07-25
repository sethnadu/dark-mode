import React, {useState} from "react";

const UseLocalStorage = (key, initialValue) => {
    
    const [storedValue, setStoredValue] = useState(() => {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
    );

        console.log(storedValue)
    const setValue = value => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
             };
          

    return [storedValue, setValue]  
};

export default UseLocalStorage;
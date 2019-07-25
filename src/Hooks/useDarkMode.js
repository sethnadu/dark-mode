import React, {useEffect} from "react";
import UseLocalStorage  from "./useLocalStorage";


const UseDarkMode = () => {
 const [darkMode, setDarkMode] = UseLocalStorage('darkModeOn', false)
 console.log(UseLocalStorage)
 useEffect(() => {
     if (darkMode === true) {
         document.querySelector("body").classList.add("dark-mode")
         console.log("true")
     } else {
        document.querySelector("body").classList.remove("dark-mode")
        console.log("false")
     }
     return ["darkModeOn", setDarkMode]
 }, [ darkMode])
 
}

export default UseDarkMode;
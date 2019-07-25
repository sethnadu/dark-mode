import React, {useEffect} from "react";
import useLocalStorage  from "./useLocalStorage";


const useDarkMode = (initialValue) => {
 const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue)

 useEffect(() => {
     if (darkMode !== true) {
         document.querySelector("body").classList.remove("dark-mode");
     } else {
        document.querySelector("body").classList.add("dark-mode");
     }
    
 }, [darkMode])
 return [darkMode, setDarkMode]
}

 

export default useDarkMode;
import styles from "/src/components/Navbar.module.css";
import { useState,useEffect} from "react";

function Switcher() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className={styles.themeswitcher}>
        <div className={`${styles.themetoggle} ${darkMode ? styles.dark : styles.light}`}>
            {darkMode ? <img src="src/Photos/moon.png"className={styles.image}></img> : <img src="src/Photos/brightness.png"className={styles.image}></img>}
        </div>
    </button>
  );
}

export default Switcher
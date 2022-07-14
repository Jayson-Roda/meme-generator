import { useState } from "react"

export default function Navbar(props){
    

    const [darkMode, setDarkMode] = useState(false)
    
    function darkChange(){
        let bodyEl = document.getElementsByTagName("BODY")[0].style
        setDarkMode(prevDark => !prevDark)
        darkMode ? bodyEl.backgroundColor = "" : bodyEl.backgroundColor = "#282D35"
    }
    
    return (
        <nav className={darkMode ? "container-fluid bg-dark header rounded" : "container-fluid bg-light header rounded"}  >
            <img src="../images/Troll Face.png" className="trollFaceLogo" alt="MEME LOGO"/>
            <h1 className={darkMode ? "text-white me-auto fs-4 pt-1" : "text-dark me-auto fs-4 pt-1"}>Meme Generator</h1>
            <button className="btn btn-rounded" onClick={darkChange}>{darkMode ? <i class="bi bi-sun text-white"></i> : <i class="bi bi-moon-stars"></i>} </button>
        </nav>    
    )
}
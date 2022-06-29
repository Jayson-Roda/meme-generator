import React from "react"

export default function Meme(){
    

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])
    

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
        }))
    }

    const [darkMode, setDarkMode] = React.useState(false)
    
    function darkChange(){
        let bodyEl = document.getElementsByTagName("BODY")[0].style
        setDarkMode(prevDark => !prevDark)
        darkMode ? bodyEl.backgroundColor = "white" : bodyEl.backgroundColor = "black"
    }

    return (
        <main className="main">
            <button className="mode--btn" onClick={darkChange}>{darkMode ? "Light" : "Dark"} Mode</button>
            <div className="form">
                
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="top-text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="bottom-text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button 
                    className="form--btn" 
                    onClick={getMemeImage}>Get a new meme image 🖼
                </button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="meme-images" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}
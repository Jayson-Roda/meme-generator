import { useState, useEffect } from "react"

export default function Meme(){
    

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])
    

    useEffect(() => {
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

    return (
        <main>
            <div class="container-fluid">
                <div class="row ">
                    <div class="col-md-6 pt-2">
                        <input 
                            type="text" 
                            className="form--input" 
                            placeholder="top-text"
                            name="topText"
                            value={meme.topText}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="col-md-6 pt-2">
                        <input 
                            type="text" 
                            className="form--input" 
                            placeholder="bottom-text"
                            name="bottomText"
                            value={meme.bottomText}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                

                <button 
                    className="form--btn" 
                    onClick={getMemeImage}>Get a new meme image 🖼
                </button>

                <div className="meme">
                    <img src={meme.randomImage} className="meme--image" alt="meme-images" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}
//App.jsx
import {useState} from "react"
import {languages} from './languages.js'


export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("React")

    const alphabet = "qwertyuiopasdfghjklzxcvbnm"
    const keys = alphabet.split("").map(letter => (
        <button key = {letter} className = "key"> {letter.toUpperCase()}</button>
    ))

    const languageChips = languages.map(lang => {
          const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return(
        <span
            className = "chips" style = {styles} key = {lang.name}>
                {lang.name}
                </span>
        )})

        const letters = currentWord.split("").map((letter, index)=>
            (<span key = {index}>{letter.toUpperCase()}</span>)
        )

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the 
                programming world safe from Assembly!</p>
            </header>
            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>

            <section className= "language-chips">
                {languageChips}
            </section>

            <section className="word">
                {letters}
            </section>

            <section className= "keyboard">
                {keys}
            </section>

              <button className="new-game">New Game</button>
          
        </main>
    )

}
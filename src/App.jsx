//App.jsx
import {useState} from "react"
import {languages} from './languages.js'
import {clsx} from 'clsx'
import {getFarewellText} from "./utils.js"


export default function AssemblyEndgame() {
    //State values
    const [currentWord, setCurrentWord] = useState("react")  
    const [guessedLetter, setGuessedLetter] = useState([])

    //Derived Values
    const wrongGuessCount = guessedLetter.filter(letter => !currentWord.includes(letter)).length
    const isGameWon = currentWord.split("").every(letter => guessedLetter.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length -1
    const isGameOver = isGameWon || isGameLost
    const lastGuessedLetter = guessedLetter[guessedLetter.length - 1]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
    const fareWellLang = isLastGuessIncorrect && languages[wrongGuessCount -1].name

    //Static Values
    const alphabet = "qwertyuiopasdfghjklzxcvbnm"



    function addGuessedLetter(letter){
        setGuessedLetter(prev => prev.includes(letter)? prev : [...prev, letter])
    }


    const keys = alphabet.split("").map(letter => {
        const isGuessed = guessedLetter.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return(
        <button key = {letter}  className = {className} disabled ={isGameOver} onClick= {(() => addGuessedLetter(letter))}> 
                {letter.toUpperCase()}
                    </button>)
})

    const languageChips = languages.map((lang, index) => {
        const isLanguageLost = index < wrongGuessCount
          const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return(
        <span
            className = {clsx("chip", isLanguageLost && "lost")} style = {styles} key = {lang.name}>
                {lang.name}
                </span>
        )})

        const currentLetters = currentWord.split("").map((letter, index)=>
            (<span key = {index}>{guessedLetter.includes(letter) &&currentWord.includes(letter)? letter.toUpperCase() : ""}</span>)
        )

        const gameStatusClass = clsx("game-status",
                                { won:isGameWon, lost:isGameLost, fareWell: isLastGuessIncorrect && !isGameOver})

        function renderGameStatus(){
            if(!isGameOver && isLastGuessIncorrect){
                return ( 
                        <p className="farewell-message">{getFarewellText(fareWellLang)}</p>
                )
            }
            if(isGameWon){
                return(
                      <>
                    <h2>You win!</h2>
                     <p>Well done! 🎉</p>
                    </>
                )
            }
            if(isGameLost){
                return(
                      <>
                     <h2>Game over!</h2>
                     <p>You lose! Better start learning Assembly 😭</p>
                    </>
                )
            }
             return null
        }

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the 
                programming world safe from Assembly!</p>
            </header>
            <section className={gameStatusClass}>
                {renderGameStatus()}
            </section>

            <section className= "language-chips">
                {languageChips}
            </section>

            <section className="word">
                {currentLetters}
            </section>

            <section className= "keyboard">
                {keys}
            </section>

             {isGameOver && <button className="new-game">New Game</button>}
          
        </main>
    )

}
//App.jsx
import {nanoid} from "nanoid"
import {useState} from "react"
import Die from "./components/Die"

export default function App() {

    const [diceValues, setDiceValues] = useState(generateAllNewDice());

 function generateAllNewDice(){
    const randomNumbers = [];
    for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 6) + 1
    randomNumbers.push({value: randomNum,
                        isheld: false,
                        id: nanoid()
                    });
}
return randomNumbers;
}

function rollDice(){
    setDiceValues(oldDice => oldDice.map(element =>
        element.isheld === true? element:
        {...element, value: Math.floor(Math.random() * 6) + 1}
    ));
}

function holdDice(id){
    setDiceValues(prevDice => prevDice.map(element =>
         element.id === id? ({...element, isheld: !element.isheld}) : element
    ))
}

const diceElements = diceValues.map(dieObject => 
                                        <Die key = {dieObject.id} 
                                        value = {dieObject.value} 
                                        isHeld = {dieObject.isheld}
                                        hold = {() => holdDice(dieObject.id)} />
)

    return (
        <main>
             <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>

            <button className="roll-dice" onClick = {rollDice}> Roll </button>
        </main>
    )
}
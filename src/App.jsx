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
                        isheld: true,
                        id: nanoid()
                    });
}
return randomNumbers;
}

function rollDice(){
    setDiceValues(generateAllNewDice());
}

const diceElements = diceValues.map(dieObject => <Die key = {dieObject.id} value = {dieObject.value} isHeld = {dieObject.isheld} />
)

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>

            <button className="roll-dice" onClick = {rollDice}> Roll </button>
        </main>
    )
}
import {useState} from "react"
import Die from "./components/Die"

export default function App() {

    const [diceValues, setDiceValues] = useState(generateAllNewDice());

 function generateAllNewDice(){
    const randomNumbers = [];
    for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 6) + 1
    randomNumbers.push(randomNum);
}
return randomNumbers;
}


const diceElements = diceValues.map(element => <Die value = {element}/>
)

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
        </main>
    )
}
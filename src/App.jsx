import Die from "./components/Die"



export default function App() {

    function generateAllNewDice(){
    const randomNumbers = [];
    for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 6) + 1
    randomNumbers.push(randomNum);
}
return randomNumbers;
}
console.log(generateAllNewDice());

    return (
        <main>
            <div className="dice-container">
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
            </div>
        </main>
    )
}
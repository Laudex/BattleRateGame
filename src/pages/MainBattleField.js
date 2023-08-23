import {useEffect, useState} from "react";
import data from '../data/test-currency.json'
import {randomNumberInRange, randomCurrency} from "../utils/Utils";
import Button from "../buttons/Button";
import './MainBattleField.css'


function MainBattleField() {
    const [counter, setCounter] = useState(100)
    const [gameOver, setGameOver] = useState(false)
    const [leftNum, setLeftNum] = useState(randomNumberInRange(1, 100))
    const [rightNum, setRightNum] = useState(randomNumberInRange(1, 100))
    const [currency, setCurrency] = useState(randomCurrency())
    const [equal, setEqual] = useState(">")
    const [rate, setRate] = useState(0)


    function yesButton() {
        if (equal == ">") {
            const leftRate = data.find((data) => data.name == currency[0]).rate
            const rightRate = data.find((data) => data.name == currency[1]).rate
            if (leftNum * leftRate > rightNum * rightRate) {
                increase()
            } else {
                decrease()
            }
        }
    }

    function noButton() {
        if (equal == ">") {
            const leftRate = data.find((data) => data.name == currency[0]).rate
            const rightRate = data.find((data) => data.name == currency[1]).rate
            if (leftNum * leftRate <= rightNum * rightRate) {
                increase()
            } else {
                decrease()
            }
        }
    }

    function updateRandomValues() {
        setLeftNum(randomNumberInRange(1, 100))
        setRightNum(randomNumberInRange(1, 100))
        setCurrency(randomCurrency)
    }

    function increase() {
        setCounter(prevState => prevState + 5)
        setRate(prevState => prevState + 1)
        updateRandomValues()
    }

    function decrease() {
        if (counter < 5) {
            setCounter(0)
        } else {
            setCounter(prevState => prevState - 5)
        }
        updateRandomValues()
    }

    function tick() {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    })

    useEffect(() => {
        if (counter == 0) {
            setGameOver(true)
        }
    }, [counter])

    return (
        <div>
            <div>Your rate: {rate}</div>
            <div className="RateAndCounter">
                <div className="Inequality">{leftNum} {currency[0]} {equal} {rightNum} {currency[1]}</div>
                <div className="Counter">{counter}</div>
            </div>
            {!gameOver && <div className="Choose-buttons">
                <Button classname="Yes-button" func={yesButton} text="Yes"/>
                <Button classname="No-button" func={noButton} text="No"/>
            </div>}
            {gameOver && <div>Game Over!</div>}
        </div>
    )
}

export default MainBattleField
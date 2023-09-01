import {useEffect, useState} from "react";
import {randomNumberInRange, randomCurrency, getCurrencyIcon, calculateBucketFinalValue, randomSign} from '../../utils/Utils';
import Button from "../../buttons/Button";
import './MainBattleField.css'
import YesIcon from '../../assets/yes-icon.svg'
import NoIcon from '../../assets/no-icon.svg'
import Bucket from '../../components/bucket/Bucket';
import GameLogo from "../../components/gamelogo/GameLogo";

function MainBattleField(props) {
    const overallTime = 10;
    const timeRange = 3
    const increaseDecreaseValue = timeRange * (100 / overallTime);
    const [counterWidth, setCounterWidth] = useState(100)
    const [leftNum, setLeftNum] = useState(() => randomNumberInRange(1, 100))
    const [rightNum, setRightNum] = useState(() => randomNumberInRange(1, 100))
    const [currency, setCurrency] = useState(randomCurrency)
    const [score, setScore] = useState(0)
    const [sign, setSign] = useState(randomSign)


    function yesButton() {
        const leftRate = props.currencyJson.find((data) => data.name === currency[0]).rate
        const rightRate = props.currencyJson.find((data) => data.name === currency[1]).rate
        const leftValue = calculateBucketFinalValue(leftNum, leftRate)
        const rightValue = calculateBucketFinalValue(rightNum, rightRate)
        if (sign === ">") {
            if (leftValue > rightValue) {
                increase()
            } else {
                decrease()
            }
        } else {
            if (leftValue < rightValue) {
                increase()
            } else {
                decrease()
            }
        }
    }

    function noButton() {
        const leftRate = props.currencyJson.find((data) => data.name === currency[0]).rate
        const rightRate = props.currencyJson.find((data) => data.name === currency[1]).rate
        const leftValue = calculateBucketFinalValue(leftNum, leftRate)
        const rightValue = calculateBucketFinalValue(rightNum, rightRate)
        if (sign === ">") {
            if (leftValue <= rightValue) {
                increase()
            } else {
                decrease()
            }
        } else {
            if (leftValue >= rightValue) {
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
        setSign(randomSign)
    }

    function increase() {
        if (counterWidth > 100 - increaseDecreaseValue) {
            setCounterWidth(100)
        } else {
            setCounterWidth(prevState => prevState + increaseDecreaseValue)
        }
        setScore(prevState => prevState + 1)
        updateRandomValues()
    }

    function decrease() {
        if (counterWidth <= increaseDecreaseValue) {
            setCounterWidth(0)
        } else {
            setCounterWidth(prevState => prevState - increaseDecreaseValue)
        }
        updateRandomValues()
    }

    function tick() {
        if (counterWidth >= 0) {
            setCounterWidth(prevState => prevState - 100 / overallTime)
        }
    }
    

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    })

    useEffect(() => {
        if (counterWidth < 0) {
            props.endGame()
            props.setTotalScore(score)
        }
    }, [counterWidth, props, score])

    return (
        <div>
            <div className="Main-battle-field-layout">
                <GameLogo/>
                <div className="Score-text">Score: {score}</div>
                <div className="Buckets">
                    <Bucket number={leftNum} icon={getCurrencyIcon(currency[0])}/>
                    <div className="Sign">{sign}</div>
                    <Bucket number={rightNum} icon={getCurrencyIcon(currency[1])}/>
                </div>
                <div className="Counter-bar">
                    <div className="Counter-timer" style={{width: `${counterWidth}%`}}>
                    </div>
                </div>
                <div className="Choose-buttons">
                    <Button classname="No-button" func={noButton}>
                        <img src={NoIcon}/>
                    </Button>
                    <Button classname="Yes-button" func={yesButton}>
                        <img src={YesIcon}/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MainBattleField
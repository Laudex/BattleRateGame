import './Battle.css'
import './buttons/Button.css'
import Button from "./buttons/Button";
import TableButtons from "./buttons/TableButtons";
import {useCallback, useEffect, useState} from "react";
import ActualCoursePage from "./pages/actualcourse/ActualCoursePage";
import Axios from 'axios';
import StartPage from "./pages/startpage/StartPage";
import MainBattleField from "./pages/mainbattlefield/MainBattleField";
import GameOverPage from "./pages/gameover/GameOverPage";
import {getCurrentDate} from "./utils/Utils"

function Battle() {
    const [showGamePage, setShowGamePage] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [totalScore, setTotalScore] = useState(0)
    const [showActualCourse, setShowActualCourse] = useState(false)
    const [initialCurrency, setInitialCurrency] = useState("usd");
    /*const [currencyJson, setCurrencyJson] = useState({
        usd: 0,
        eur: 0,
        rub: 0,
        gbp: 0,
        jpy: 0
    });*/
    const [currencyJson, setCurrencyJson] = useState([]);

    function startGame() {
        setShowGamePage(true)
        setShowActualCourse(false)
        setGameOver(false)
    }

    function endGame() {
        setGameOver(true)
        setShowGamePage(false)
    }

    function openActualCourse() {
        setShowActualCourse(true)
        setGameOver(false)
    }

    function hideActualCourse() {
        setShowActualCourse(false)
    }

    const setCurrencyData = useCallback((res) => {
        console.log(res)
        const data = res.data[initialCurrency]
        setCurrencyJson([
            {
                name: 'EUR',
                rate: data.eur
            },
            {
                name: 'USD',
                rate: data.usd
            },
            {
                name: 'RUB',
                rate: data.rub
            },
            {
                name: 'GBP',
                rate: data.gbp
            },
            {
                name: 'JPY',
                rate: data.jpy
            },
        ])
    }, [initialCurrency])

    useEffect(() => {
        Axios.get(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${getCurrentDate()}/currencies/${initialCurrency}.json`)
            .then(setCurrencyData)
    }, [initialCurrency, setCurrencyData])

    /*useEffect(() => {
        Axios.get(`http://localhost:8080/test`).then(
            (res) => {
                console.log(res)
            }
        )
    })*/

    return (
        <div className="Main-layout">
            {gameOver
                ? <GameOverPage score={totalScore} openActualCourse={openActualCourse} startGame={startGame}/>
                : <div>
                    {showGamePage ?
                        <MainBattleField currencyJson={currencyJson} endGame={endGame} setTotalScore={setTotalScore}/>
                        : showActualCourse ?
                            <ActualCoursePage currencyJson={currencyJson} hideActualCourse={hideActualCourse} startGame={startGame}/> :
                            <StartPage openActualCourse={openActualCourse} startGame={startGame}/>
                    }
                </div>
            }
        </div>
    )
}

export default Battle
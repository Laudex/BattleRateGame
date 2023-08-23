import './Battle.css'
import './buttons/Button.css'
import Button from "./buttons/Button";
import GamePage from "./pages/GamePage";
import TableButtons from "./buttons/TableButtons";
import {useEffect, useState} from "react";
import CurrencyTable from "./pages/CurrencyTable";
import Axios from 'axios';

function Battle() {
    const [showGamePage, setShowGamePage] = useState(false)
    const [showCurrencyTable, setShowCurrencyTable] = useState(false)
    const [initialCurrency, setInitialCurrency] = useState("rub");

    function startGame(isStarted) {
        setShowGamePage(isStarted)
    }

    useEffect(() => {
        console.log("Calling")
        Axios.get(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${initialCurrency}.json`)
            .then((res) => {
                console.log(res.data[initialCurrency])
            })
    }, [initialCurrency])

    return (
        <div className="Main-layout">
            {!showGamePage && <div className="Main-buttons">
                <Button classname="Button" func={e => startGame(true)} text="Start game"/>
                <TableButtons setShowCurrencyTable={setShowCurrencyTable} showCurrencyTable={showCurrencyTable}/>
            </div>}
            {showGamePage
                && <div>
                    <GamePage func={e => startGame(false)}/>
                    <TableButtons setShowCurrencyTable={setShowCurrencyTable} showCurrencyTable={showCurrencyTable}/>
                </div>}
            {showCurrencyTable && <CurrencyTable/>}
        </div>
    )
}

export default Battle
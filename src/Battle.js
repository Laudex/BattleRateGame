import './Battle.css'
import './buttons/Button.css'
import Button from "./buttons/Button";
import GamePage from "./pages/GamePage";
import TableButtons from "./buttons/TableButtons";
import {useState} from "react";
import CurrencyTable from "./pages/CurrencyTable";

function Battle() {
    const [showGamePage, setShowGamePage] = useState(false)
    const [showCurrencyTable, setShowCurrencyTable] = useState(false)

    function startGame(isStarted) {
        setShowGamePage(isStarted)
    }

    function openCurrencyTable() {
        setShowCurrencyTable(prevState => !prevState)
    }

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
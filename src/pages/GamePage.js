import Button from "../buttons/Button";
import MainBattleField from "./MainBattleField";
import './GamePage.css'
import '../buttons/Button.css'

function GamePage(props) {
    return (
        <div className="Game-page-main">
            <Button classname="Button" func={props.func} text="Back"/>
            <MainBattleField/>
        </div>
    )
}

export default GamePage
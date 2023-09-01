import './GameOverPage.css'
import '../../buttons/Button.css'
import '../startpage/StartPage.css'
import GameLogo from "../../components/gamelogo/GameLogo";
import Button from "../../buttons/Button";

function GameOverPage(props) {
    return (
        <div className="Game-over-page-layout">
            <GameLogo/>
            <div className="Total-score">
                <span>Total score</span>
                <span>{props.score}</span>
            </div>
            <div className="Main-buttons">
                <Button classname="Sample-button" func={() => props.openActualCourse()}>
                    ACTUAL COURSE</Button>
                <Button classname="Play-button" func={() => props.startGame()}>Play Again</Button>
            </div>
        </div>
    )
}

export default GameOverPage
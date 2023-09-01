import data from '../../data/test-currency.json'
import './ActualCoursePage.css'
import {getCurrencyIcon} from '../../utils/Utils'
import Button from "../../buttons/Button";
import "../startpage/StartPage.css";
import "../../buttons/Button.css";
import CourseField from "../../components/coursefield/CourseField";

function ActualCoursePage(props) {

    const eurRate = props.currencyJson.find((data) => data.name === 'EUR').rate
    const usdRate = props.currencyJson.find((data) => data.name === 'USD').rate
    const rubRate = props.currencyJson.find((data) => data.name === 'RUB').rate
    const gbpRate = props.currencyJson.find((data) => data.name === 'GBP').rate
    const jpyRate = props.currencyJson.find((data) => data.name === 'JPY').rate


    return (
        <div className="Actual-course-page-layout">
            <div className="Actual-course-header">ACTUAL COURSE</div>
            <div className="Actual-course-table">
                <div className="Course-cell"><CourseField firstRate={usdRate} secondRate={eurRate}/></div>
                <div className="Course-cell"><CourseField firstRate={rubRate} secondRate={eurRate}/></div>
                <div className="Course-cell"><CourseField firstRate={usdRate} secondRate={rubRate}/></div>
                <div className="Course-cell"><CourseField firstRate={jpyRate} secondRate={eurRate}/></div>
                <div className="Course-cell"><CourseField firstRate={jpyRate} secondRate={usdRate}/></div>
                <div className="Course-cell"><CourseField firstRate={gbpRate} secondRate={eurRate}/></div>
                <div className="Course-cell"><CourseField firstRate={gbpRate} secondRate={usdRate}/></div>
                <div className="Course-cell"><CourseField firstRate={jpyRate} secondRate={rubRate}/></div>
                <div className="Course-cell"><CourseField firstRate={gbpRate} secondRate={rubRate}/></div>
                <div className="Course-cell"><CourseField firstRate={jpyRate} secondRate={gbpRate}/></div>
            </div>
            <div className="Main-buttons">
                <Button classname="Play-button" func={() => props.startGame()}>Play!</Button>
                <Button classname="Sample-button" func={() => props.hideActualCourse()}>
                    Menu</Button>

            </div>
        </div>
    )
}

export default ActualCoursePage
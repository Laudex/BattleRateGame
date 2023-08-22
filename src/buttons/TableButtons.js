import './Button.css'
import Button from "./Button";
import '../Battle.css'

function TableButtons(props) {

    function openCurrencyTable() {
        props.setShowCurrencyTable(prevState => !prevState)
    }

    return (
        <div className = "Table-buttons">
             {!props.showCurrencyTable && <Button classname="Button" func={openCurrencyTable} text="Currency table"/>}
             {props.showCurrencyTable && <Button classname="Button" func={openCurrencyTable} text="Hide table"/>}
        </div>
    )
}

export default TableButtons
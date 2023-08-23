import data from '../data/test-currency.json'
import './CurrenyTable.css'
import {getCurrencyIcon} from '../utils/Utils'

function CurrencyTable() {
    return (
        <div className="Currency-table-main">
            <table>
                <tr>
                    {data.map((data) => {
                        return <th className="Table-header">
                            <div className="Header-cell">
                                <img className="Icon" src={getCurrencyIcon(data.name)}/>
                                {data.name}
                            </div>
                        </th>
                    })}
                </tr>
                <tr>
                    {data.map((data) => {
                        return <td className="Table-cell">{data.rate}</td>
                    })}
                </tr>
            </table>
        </div>
    )
}

export default CurrencyTable
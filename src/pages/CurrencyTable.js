import data from '../data/test-currency.json'
import './CurrenyTable.css'

function CurrencyTable() {

    return (
        <div className="Currency-table-main">
            <table className="Currency-table-main">
                <tr>
                    {data.map((data) => {
                        return <th>{data.name}</th>
                    })}
                </tr>
                <tr>
                    {data.map((data) => {
                        return <td>{data.rate}</td>
                    })}
                </tr>
            </table>
        </div>
    )
}

export default CurrencyTable
import './Bucket.css'

function Bucket(props) {
    return (
        <div className="Bucket-layout">
            <img src={props.icon} />
            <div className="Bucket-number">{props.number}</div>
        </div>
    )
}

export default Bucket
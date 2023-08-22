import './Button.css'

function Button(props) {
    return (
        <button className={props.classname} onClick={props.func}>{props.text}</button>

    )
}

export default Button

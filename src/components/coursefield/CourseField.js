function CourseField(props) {

    function getFixed (first, second) {
        return (first/second).toFixed(2)
    }
    return (
        <div>
            {props.firstRate > props.secondRate
                ? <div>
                    1 = {getFixed(props.firstRate, props.secondRate)}
                </div>
                : <div>1 = {getFixed(props.secondRate, props.firstRate)}</div>}
        </div>
    )
}

export default CourseField
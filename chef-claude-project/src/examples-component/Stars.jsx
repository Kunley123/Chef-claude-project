import starEmpty from '../assets/star-empty.png'
import starFilled from '../assets/star-filled.png'


export default function Stars(props) {


    let starIcon = props.isFilled ? starFilled : starEmpty

    return (
        <>
            <button
                onClick={props.handleClick}
                aria-pressed={props.isFilled}
                arial-label={props.isFilled ? "Remove from favorite" : "Add to favorite"}
                className="star-button">
                <img src={starIcon} />
            </button>
        </>
    )
}
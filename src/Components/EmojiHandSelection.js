import "./EmojiHandSelection.css" ; 



function EmojiHandSelection({ PlayerHand , ComputerHand }) {



    return (
        <div className="hand-selection">
            <HandSelection hand={PlayerHand} />
            <HandSelection hand={ComputerHand} />
        </div>

    )

}

function HandSelection({ hand }) {
    return (
        <h1 className="hand"> {hand}</h1>
    )
}



export default EmojiHandSelection;
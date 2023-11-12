import "./TextHandSelection.css"

function TextHandSelection({ playerHandSelection, computerHandSelection }) {


    const playerName = "You";
    const computerName = "Computer";

    return (
        <div className="text-hand-selection">
            <HandSelection name={playerName} handSelection={playerHandSelection}/>
            <HandSelection name={computerName} handSelection={computerHandSelection}/>
        </div>
    )
}

function HandSelection({ name, handSelection }) {
    return (
        <div className="hand-select">
            <p className="para"> {name} Choose  </p>
            <h1 className="heading"> {handSelection} </h1>
        </div>
    )
}






export default TextHandSelection;
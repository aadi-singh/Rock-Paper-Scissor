
import "./Score.css"

function Score({playerScore , computerScore}){

    return(
        <div className="score">
            <p > Score </p>
            <h1 >{playerScore} / { computerScore}</h1>
        </div>
    )
}


export default Score;


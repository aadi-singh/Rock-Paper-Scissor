
import "./Button.css"
import hand from "../Const/hand"


function Button({ setGameState }) {




    return (
        <div className="button">
            <ButtonComponent handInfo={hand.rock} setGameState={setGameState} />
            <ButtonComponent handInfo={hand.paper} setGameState={setGameState} />
            <ButtonComponent handInfo={hand.scissor} setGameState={setGameState} />
        </div>
    )
}



function ButtonComponent({ handInfo , setGameState }) {


    const updateScore = function(playerHandInfo , computerHandInfo){

        if(playerHandInfo.name === computerHandInfo.name){
            return [0,0];
        }else if(playerHandInfo.beats === computerHandInfo.name){
            return [1,0];
        }else{
            return [0,1];
        }

    }


    const getComputerHandSelection = function () {
        const handGes = [hand.rock, hand.scissor, hand.paper];
        const randomIndex = Math.floor(Math.random() * 3);
        const computerHand = handGes[randomIndex];
        return computerHand;
    };


    function handleClick() {
        
        const computerHand = getComputerHandSelection();
        const [playerScore , computerScore ] = updateScore(handInfo, computerHand);
        setGameState((prevState) => {
            return{
            ...prevState,
            playerHandSelection : handInfo,
            computerHandSelection : computerHand,  
            playerScore : prevState.playerScore+playerScore , 
      computerScore: prevState.computerScore+computerScore, 
             }
        })

    console.log(handInfo)
}

return (
    <button onClick={handleClick}> {handInfo.name}</button>
)
}



export default Button;
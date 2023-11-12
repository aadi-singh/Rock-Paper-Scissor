

import './App.css';
import React, { useState } from 'react';
import EmojiHandSelection from './Components/EmojiHandSelection';
import hand from './Const/hand';
import Score from './Components/Score';
import TextHandSelection from './Components/TextHandSelection';
import Button from './Components/Button';




function App() {


   

  const [gameState , setGameState] = useState({
      playerHandSelection : hand.scissor,
      computerHandSelection: hand.rock,
      playerScore : 0 , 
      computerScore:0 , 
  });

  return (
    <div className="Home">
      <EmojiHandSelection PlayerHand={gameState.playerHandSelection.emoji} ComputerHand = {gameState.computerHandSelection.emoji}/>
      <Score playerScore = {gameState.playerScore} computerScore={gameState.computerScore}/>
      <TextHandSelection playerHandSelection = {gameState.playerHandSelection.name} computerHandSelection={gameState.computerHandSelection.name}/>
      <Button setGameState={setGameState}/>
    </div>
  );
}

export default App;

// import { useState } from 'react'
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  return (
    <>
      <div className="">
        <ScoreBoard score={12} />
      </div>
      <div>
        <GameBoard />
      </div>
    </>
  );
}

export default App;

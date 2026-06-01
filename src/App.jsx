// import { useState } from 'react'
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  return (
    <>
      <div className="">
        <ScoreBoard score={12} />
      </div>
      <div className="flex justify-center mt-20">
        <GameBoard />
      </div>
    </>
  );
}

export default App;

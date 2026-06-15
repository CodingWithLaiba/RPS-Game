// import { useState } from 'react'
import { useState } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import BattleScreen from "./components/BattelSceern";

function App() {
  const [selectedchoice, setSelectedChoice] = useState(null);
  return (
    <>
      <div className="">
        <ScoreBoard score={12} />
      </div>
      <div className="flex justify-center mt-20">
       { !selectedchoice ? (
         <GameBoard onSelect={setSelectedChoice}/>
       ):(
        <BattleScreen selectedChoice={selectedchoice} />
       )}
      </div>
    </>
  );
}

export default App;

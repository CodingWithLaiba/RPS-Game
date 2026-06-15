// import { useState } from 'react'
import { useState } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
const [selectedchoice, setSelectedChoice] = useState(null);
function App() {
  return (
    <>
      <div className="">
        <ScoreBoard score={12} />
      </div>
      <div className="flex justify-center mt-20">
        <GameBoard onSelect={setSelectedChoice}/>
      </div>
    </>
  );
}

export default App;

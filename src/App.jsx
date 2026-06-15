// import { useState } from 'react'
import { useState } from "react";
import rock from "./assets/images/icon-rock.svg";
import paper from "./assets/images/icon-paper.svg";
import scissors from "./assets/images/icon-scissors.svg";
import lizard from "./assets/images/icon-lizard.svg";
import spock from "./assets/images/icon-spock.svg";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import BattleScreen from "./components/BattelSceern";

function App() {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);

    setTimeout(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];

      setComputerChoice(randomChoice);
    }, 1000);
  };
  const choices = [
    {
      type: "scissors",
      icon: scissors,
      borderColor: "border-yellow-500",
    },
    {
      type: "paper",
      icon: paper,
      borderColor: "border-blue-500",
    },
    {
      type: "rock",
      icon: rock,
      borderColor: "border-red-500",
    },
    {
      type: "lizard",
      icon: lizard,
      borderColor: "border-purple-500",
    },
    {
      type: "spock",
      icon: spock,
      borderColor: "border-cyan-500",
    },
  ];
  return (
    <>
      <div className="">
        <ScoreBoard score={12} />
      </div>
      <div className="flex justify-center mt-20">
        {!selectedChoice ? (
          <GameBoard onSelect={handleChoiceSelect} />
        ) : (
          <BattleScreen
            selectedChoice={selectedChoice}
            computerChoice={computerChoice}
          />
        )}
      </div>
    </>
  );
}

export default App;

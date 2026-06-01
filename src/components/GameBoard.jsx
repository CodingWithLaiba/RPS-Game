import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import lizard from "../assets/images/icon-lizard.svg";
import spock from "../assets/images/icon-spock.svg";
import GameChoice from "./GameChoice"
export default function GameBoard() {
  const choices =[
    { type: "rock", icon: rock, borderColor: "border-red-500" },
    { type: "paper", icon: paper, borderColor: "border-blue-500" },
    { type: "scissors", icon: scissors, borderColor: "border-yellow-500" },
    { type: "lizard", icon: lizard, borderColor: "border-green-500" },
    { type: "spock", icon: spock, borderColor: "border-purple-500" },
  ]
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {choices.map((choice) => (
        <GameChoice
          key={choice.type}
          type={choice.type}
          icon={choice.icon}
          borderColor={choice.borderColor}
          onSelect={(selectedChoice) => console.log(selectedChoice)}
        />
      ))}
    </div>
  )
}

  
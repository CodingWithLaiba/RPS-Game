import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import lizard from "../assets/images/icon-lizard.svg";
import spock from "../assets/images/icon-spock.svg";
import GameChoice from "./GameChoice"
export default function GameBoard() {
  const choices = [
  {
    type: "scissors",
    icon: scissors,
    borderColor: "border-yellow-500",
    position: "top-[0px] left-1/2 -translate-x-1/2",
  },
  {
    type: "paper",
    icon: paper,
    borderColor: "border-blue-500",
    position: "top-[100px] right-0",
  },
  {
    type: "rock",
    icon: rock,
    borderColor: "border-red-500",
    position: "bottom-0 right-[50px]",
  },
  {
    type: "lizard",
    icon: lizard,
    borderColor: "border-purple-500",
    position: "bottom-0 left-[50px]",
  },
  {
    type: "spock",
    icon: spock,
    borderColor: "border-cyan-500",
    position: "top-[100px] left-0",
  },
];
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

  
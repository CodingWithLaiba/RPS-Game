import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import lizard from "../assets/images/icon-lizard.svg";
import spock from "../assets/images/icon-spock.svg";
import pentagon from "../assets/images/bg-pentagon.svg";
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
  const handleSelect = (choice) => {
  console.log(choice);
};

return (
  <div className="relative w-500 h-450">
    
    <img
      src={pentagon}
      alt="pentagon"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />

    {choices.map((choice) => (
      <div
        key={choice.type}
        className={`absolute ${choice.position}`}
      >
        <GameChoice
          type={choice.type}
          icon={choice.icon}
          borderColor={choice.borderColor}
          onSelect={handleSelect}
        />
      </div>
    ))}
  </div>
);
}

  
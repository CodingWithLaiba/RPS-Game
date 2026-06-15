import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import lizard from "../assets/images/icon-lizard.svg";
import spock from "../assets/images/icon-spock.svg";
import pentagon from "../assets/images/bg-pentagon.svg";

import GameChoice from "./GameChoice";

export default function GameBoard() {
  const handleSelect = (choice) => {
    console.log(choice);
  };

  const choices = [
    {
      type: "scissors",
      icon: scissors,
      borderColor: "border-yellow-500",
      position: "top-0 left-1/2 -translate-x-1/2",
    },
    {
      type: "paper",
      icon: paper,
      borderColor: "border-blue-500",
      position: "top-[110px] right-[20px]",
    },
    {
      type: "rock",
      icon: rock,
      borderColor: "border-red-500",
      position: "bottom-[20px] right-[80px]",
    },
    {
      type: "lizard",
      icon: lizard,
      borderColor: "border-purple-500",
      position: "bottom-[20px] left-[80px]",
    },
    {
      type: "spock",
      icon: spock,
      borderColor: "border-cyan-500",
      position: "top-[110px] left-[20px]",
    },
  ];

  return (
    <div className="relative w-full max-w-[600px] h-[420px] mx-auto">
      <img
        src={pentagon}
        alt="pentagon"
        className="absolute top-1/2 left-1/2 w-[260px] md:w-[320px] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 grid grid-cols-3 grid-rows-3 h-full place-items-center">
        {choices.map((choice) => (
          <div key={choice.type} className={choice.grid}>
            <GameChoice
              type={choice.type}
              icon={choice.icon}
              borderColor={choice.borderColor}
              onSelect={handleSelect}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

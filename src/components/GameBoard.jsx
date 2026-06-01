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
      grid: "col-start-2 row-start-1",
    },
    {
      type: "spock",
      icon: spock,
      borderColor: "border-cyan-500",
      grid: "col-start-1 row-start-2",
    },
    {
      type: "paper",
      icon: paper,
      borderColor: "border-blue-500",
      grid: "col-start-3 row-start-2",
    },
    {
      type: "lizard",
      icon: lizard,
      borderColor: "border-purple-500",
      grid: "col-start-1 row-start-3",
    },
    {
      type: "rock",
      icon: rock,
      borderColor: "border-red-500",
      grid: "col-start-3 row-start-3",
    },
  ];

  return (
    <div className="relative w-full max-w-[600px] h-[420px] mx-auto">
      <img
        src={pentagon}
        alt="pentagon"
        className="absolute
top-1/2
left-1/2
w-[260px]
md:w-[320px]
-translate-x-1/2
-translate-y-1/2"
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

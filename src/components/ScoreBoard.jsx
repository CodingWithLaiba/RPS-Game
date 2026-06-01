import logoBonus from "../assets/images/logo-bonus.svg";
export default function ScoreBoard({ score }) {
  return (
    <div className="border-3 border-gray-500 rounded-xl px-6  md:py-2 w-180 flex flex-row items-center justify-between">
      <img src={logoBonus} alt="Bonus Logo" className="w-30 h-30" />

      <div className="bg-white h-full py-8 px-10 border-0 rounded-lg flex flex-col justify-center items-center">
        <p className="text-xl text-center text-blue-700 font-bold tracking-wider uppercase">
          Score
        </p>
        <p className="text-5xl text-center text-gray-700 font-bold tracking-normal uppercase">
          {score}
        </p>
      </div>
    </div>
  );
}

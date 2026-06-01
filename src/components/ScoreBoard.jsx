export default function ScoreBoard({ score }) {
  return (
    <div className="border-3 border-gray-500 rounded-xl px-6 py-4 md:py-5 w-180 flex flex-row items-center justify-between">
      <div className="text-left text-white font-bold text-3xl leading-none uppercase">
        <h1>Rock</h1>
        <h1>Paper</h1>
        <h1>Scissors</h1>
        <h1>Lizard</h1>
        <h1>Spock</h1>
      </div>
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

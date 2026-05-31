export default function ScoreBoard({score}) {
  return (
    <div className="border-3 border-gray-500 rounded-xl p-4 h-39 w-180 flex md:flex-row flex-col items-center justify-between">
     <div>
      <p className="text-3xl text-start text-white font-bold tracking-tight leading-3 uppercase">
        Rock
      </p>
      <p className="text-3xl text-start text-white font-bold tracking-tight uppercase">
        Paper
      </p>
      <p className="text-3xl text-start text-white font-bold tracking-tight leading-3  uppercase">
        Scissors
      </p>
      </div>
      <div className="bg-white h-full p-10 border-0 rounded-lg flex flex-col justify-center items-center">
        <p className="text-xl text-center text-blue-700 font-bold tracking-wider uppercase">Score</p>
       <p className="text-5xl text-center text-gray-700 font-bold tracking-normal uppercase">{score}</p>

      </div>
    </div>
  );
}

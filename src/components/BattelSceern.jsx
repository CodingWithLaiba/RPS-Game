import GameChoice from "./GameChoice";

export default function BattleScreen({
  selectedChoice,
  computerChoice,
  result,
}) {
  return (
    <div className="flex items-center justify-center gap-20 text-white">
      {/* Player */}
      <div className="flex flex-col items-center gap-6">
        <p className="uppercase tracking-widest">You Picked</p>

        <GameChoice
          type={selectedChoice.type}
          icon={selectedChoice.icon}
          borderColor={selectedChoice.borderColor}
          onSelect={() => {}}
        />
      </div>
      {computerChoice && (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold">{result}</h2>

          <button
            className="
      bg-white
      text-black
      px-8
      py-3
      rounded-lg
      uppercase
      tracking-widest
      "
          >
            Play Again
          </button>
        </div>
      )}
      {/* House */}
      <div className="flex flex-col items-center gap-6">
        <p className="uppercase tracking-widest">The House Picked</p>

        {!computerChoice ? (
          <div className="w-24 h-24 rounded-full bg-slate-900/60" />
        ) : (
          <GameChoice
            type={computerChoice.type}
            icon={computerChoice.icon}
            borderColor={computerChoice.borderColor}
            onSelect={() => {}}
          />
        )}
      </div>
    </div>
  );
}

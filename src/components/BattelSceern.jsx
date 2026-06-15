import GameChoice from "./GameChoice";

export default function BattleScreen({
  selectedChoice,
  computerChoice,
}) {
  return (
    <div className="flex items-center justify-center gap-20 text-white">
      
      {/* Player */}
      <div className="flex flex-col items-center gap-6">
        <p className="uppercase tracking-widest">
          You Picked
        </p>

        <GameChoice
          type={selectedChoice.type}
          icon={selectedChoice.icon}
          borderColor={selectedChoice.borderColor}
          onSelect={() => {}}
        />
      </div>

      {/* House */}
      <div className="flex flex-col items-center gap-6">
        <p className="uppercase tracking-widest">
          The House Picked
        </p>

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
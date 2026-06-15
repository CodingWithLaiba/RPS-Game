export default function BattleScreen({ selectedChoice }) {
  return (
    <div className="text-white text-3xl">
      YOU PICKED {selectedChoice.type}
    </div>
  );
}
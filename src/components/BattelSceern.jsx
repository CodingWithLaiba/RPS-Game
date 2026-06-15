export default function BattleScreen({ selectedChoice }) {
  return (
    <div className="text-center text-white">
      <p className="text-xl mb-6">YOU PICKED</p>

      <img
        src={selectedChoice.icon}
        alt={selectedChoice.type}
        className="w-20 mx-auto"
      />

      <p className="mt-4 text-2xl uppercase">
        {selectedChoice.type}
      </p>
    </div>
  );
}
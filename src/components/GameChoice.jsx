export default function GameChoice({ type, icon, borderColor, onSelect }) {
  return (
    <button
      onClick={() => onSelect(type)}
      className={`
        w-24 h-24
    rounded-full
    border-[10px]
    ${borderColor}
    bg-white
    flex items-center justify-center
    hover:scale-105
      `}
    >
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
        <img src={icon} alt={type} className="w-8 h-8 object-contain" />
      </div>
    </button>
  );
}

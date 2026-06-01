export default function GameChoice({ type, icon, borderColor, onSelect }) {
  return (
    <button
      onClick={() => onSelect(type)}
      className={`
        w-32 h-32
        rounded-full
        ${borderColor}
        border-14
        flex items-center justify-center
        shadow-lg
        cursor-pointer
        transition-transform duration-200
        hover:scale-105
      `}
    >
      <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-inner">
        <img src={icon} alt={type} className="w-12 h-12 object-contain" />
      </div>
    </button>
  );
}

const EventCard = ({ event, position }) => {
  const borderClass = position === "left" ? "border-r-4" : "border-l-4";

  return (
    <div
      className={`${borderClass} p-3 sm:p-4  bg-zinc-900 backdrop-blur-sm   `}
      style={{
        borderColor: event.color,
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h3 className="text-white font-semibold text-sm sm:text-base">
            {event.title}
          </h3>
          {event.speaker && (
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              {event.speaker}
            </p>
          )}
        </div>
        <div className="text-gray-300 text-xs sm:text-sm font-mono whitespace-nowrap">
          {event.time}
        </div>
      </div>
    </div>
  );
};

export default EventCard
import EventCard from "./EventCard";

const TimelineDay = ({ day, events, label, color }) => (
  <div className="flex-1 min-w-[280px]">
    {/* Day Label */}
    <div className="mb-6 sm:mb-10">
      <h2
        className="text-xl sm:text-2xl lg:text-center font-bold mb-2"
        style={{ color: color }} // Use the color prop here
      >
        {label}
      </h2>
    </div>

    {/* Mobile/Tablet View */}
    <div className="relative lg:hidden">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white"></div>

      <div className="space-y-6 sm:space-y-8 ml-6 sm:ml-8">
        {events.map((event, index) => (
          <div key={index} className="relative">
            <div
              className="absolute -left-[30px] sm:-left-[38px] w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 bg-gray-900"
              style={{ borderColor: event.color }}
            ></div>
            <EventCard event={event} position="right" />
          </div>
        ))}
      </div>
    </div>

    {/* Desktop View - Alternating Layout */}
    <div className="relative hidden lg:block">
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 bg-white"></div>

      <div className="space-y-12">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className="relative">
              <div
                className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full border-2 bg-gray-900 transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ borderColor: event.color }}
              ></div>

              <div className={`flex items-center ${isLeft ? "justify-end" : "justify-start"}`}>
                <div className="w-[calc(50%-2rem)]">
                  <EventCard event={event} position={isLeft ? "left" : "right"} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default TimelineDay;

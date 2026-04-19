type Event = {
  title: string;
  tribe: string[];
  location: string;
  date: string;
  participants: number;
  capacity: number;
};

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border p-4">
      <h3 className="font-semibold text-lg">{event.title}</h3>

      <p className="text-sm text-gray-500">
        {event.location} · {event.date}
      </p>

      <div className="flex gap-2 mt-2 flex-wrap">
        {event.tribe.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
          >
            #{t}
          </span>
        ))}
      </div>

      <div className="mt-3 text-sm text-gray-600">
        {event.participants}/{event.capacity} personas
      </div>
    </div>
  );
}

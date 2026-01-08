import EventCard from "../ui/EventCard";
import { mockEvents } from "";

export default function Community() {
  return (
    <div className="pt-6 px-4 pb-24">
      <h1 className="text-2xl font-semibold mb-1">Comunidad</h1>
      <p className="text-gray-600 text-sm mb-6">
        Actividades y eventos cerca de ti
      </p>

      <div className="flex flex-col gap-4">
        {mockEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

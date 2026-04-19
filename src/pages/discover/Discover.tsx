import { profiles } from "../../data/profiles";
import { mockEvents } from "../../data/mockEvents";
import EventCard from "../../components/ui/EventCard";
import { useNavigate } from "react-router-dom";

export default function Discover() {
  const navigate = useNavigate(); // 🔥 navegación

  return (
    <div className="pt-6 px-4 pb-24 flex flex-col gap-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">Descubrir</h1>
        <p className="text-sm text-gray-500">
          Conecta con gente afín a ti
        </p>
      </div>

      {/* 🔥 QUICK ACTIONS */}
      <div className="flex gap-2 overflow-x-auto">
        <Action
          label="👤 Cerca de ti"
          onClick={() => navigate("/discover/cerca")}
        />
        <Action
          label="📅 Eventos"
          onClick={() => navigate("/discover/eventos")}
        />
        <Action
          label="🧵 Feed"
          onClick={() => navigate("/discover")}
        />
      </div>

      {/* 👤 PERSONAS PARA TI */}
      <Section title="Personas para ti">
        <div className="flex gap-3 overflow-x-auto">
          {profiles.map((p) => (
            <div
              key={p.id}
              className="min-w-[100px] bg-white rounded-xl p-2 shadow"
            >
              <img
                src={p.image}
                className="w-full h-20 object-cover rounded-lg"
              />
              <p className="text-xs font-medium mt-1">
                {p.name}
              </p>
              <p className="text-xs text-green-500">
                🔥 {p.affinity || 80}%
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 🧵 FEED */}
      <Section title="Actividad">
        <FeedItem
          title="💪 Gym"
          text="Busco partner gym"
          affinity={82}
        />
        <FeedItem
          title="🎧 Música"
          text="Evento techno este finde"
          affinity={76}
        />
      </Section>

      {/* 📅 EVENTOS */}
      <Section title="Eventos cerca">
        {mockEvents.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </Section>

    </div>
  );
}

/* 🔧 COMPONENTES */

function Action({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 px-3 py-1 rounded-full text-sm whitespace-nowrap"
    >
      {label}
    </button>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold mb-2">
        {title}
      </h2>
      {children}
    </div>
  );
}

function FeedItem({
  title,
  text,
  affinity,
}: {
  title: string;
  text: string;
  affinity: number;
}) {
  return (
    <div className="bg-white p-3 rounded-xl shadow mb-2">
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-500">{text}</p>
      <p className="text-xs text-green-500 mt-1">
        🔥 {affinity}% afinidad contigo
      </p>
    </div>
  );
}
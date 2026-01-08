import { useMatch } from "../context/MatchContext";

export default function Matches() {
  const { matches } = useMatch();

  if (matches.length === 0) {
    return (
      <div className="flex justify-center items-center h-full text-gray-500">
        Aún no tienes matches 💔
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      {matches.map((m: any) => (
        <div
          key={m.id}
          className="bg-white rounded-xl shadow overflow-hidden"
        >
          <img
            src={m.image}
            className="h-40 w-full object-cover"
          />
          <div className="p-2 text-center font-medium">
            {m.name}
          </div>
        </div>
      ))}
    </div>
  );
}

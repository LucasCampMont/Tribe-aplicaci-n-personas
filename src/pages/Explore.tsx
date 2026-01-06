import TribeCard from "../components/ui/TribeCard";

export default function Explore() {
  return (
    <div className="min-h-screen p-4 space-y-4">

      {/* Card de bienvenida */}
      <TribeCard>
        <h2 className="text-tribe-dark text-lg font-semibold">
          Bienvenido a Tribe 🌴
        </h2>
        <p className="text-tribe-dark text-opacity-70 text-sm mt-1">
          Personas cerca de ti, conexiones reales.
        </p>
      </TribeCard>

      {/* Card de usuario */}
      <TribeCard className="flex items-center gap-4">
        <div
          className="
            w-14 h-14 rounded-full
            bg-tribe-accent
            flex items-center justify-center
            text-tribe-dark font-bold
          "
        >
          LC
        </div>

        <div className="flex-1">
          <p className="font-semibold text-tribe-dark">
            Lucas, 20
          </p>
          <p className="text-tribe-dark text-opacity-70 text-sm">
            Santiago • 2 km
          </p>
        </div>

        <button
          className="
            px-3 py-1.5 rounded-full
            bg-tribe-primary
            text-white text-sm font-medium
            hover:opacity-90 transition
          "
        >
          Conectar
        </button>
      </TribeCard>

      {/* Card de ejemplo adicional */}
      <TribeCard className="flex items-center gap-4">
        <div
          className="
            w-14 h-14 rounded-full
            bg-tribe-accent
            flex items-center justify-center
            text-tribe-dark font-bold
          "
        >
          AB
        </div>

        <div className="flex-1">
          <p className="font-semibold text-tribe-dark">
            Ana, 22
          </p>
          <p className="text-tribe-dark text-opacity-70 text-sm">
            Santiago • 3 km
          </p>
        </div>

        <button
          className="
            px-3 py-1.5 rounded-full
            bg-tribe-primary
            text-white text-sm font-medium
            hover:opacity-90 transition
          "
        >
          Conectar
        </button>
      </TribeCard>

    </div>
  );
}

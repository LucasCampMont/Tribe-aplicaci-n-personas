import type { Profile } from "../../types";

export default function ProfileCard({
  profile,
}: {
  profile: Profile;
}) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      {/* Imagen */}
      <div className="relative">
        <img
          src={profile.image}
          className="w-full h-32 object-cover"
        />

        {/* Afinidad */}
        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
          🔥 {profile.affinity || 80}%
        </div>
      </div>

      {/* Info */}
      <div className="p-2">
        <p className="text-sm font-semibold">
          {profile.name}, {profile.age}
        </p>

        <p className="text-xs text-gray-500">
          {profile.bio || "Sin descripción"}
        </p>
      </div>

    </div>
  );
}
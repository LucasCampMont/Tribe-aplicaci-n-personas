import { useState } from "react";
import { profiles } from "../data/profiles";
import ProfileCard from "../components/ui/ProfileCard";

export default function Explore() {
  const [index, setIndex] = useState(0);

  if (index >= profiles.length) {
    return (
      <div className="flex justify-center items-center h-[500px] text-gray-500">
        No hay más perfiles ✨
      </div>
    );
  }

  return (
    <div className="flex justify-center pt-6">
      <div className="relative w-full max-w-sm h-[500px]">
        {/* Card de atrás */}
        {profiles[index + 1] && (
          <ProfileCard
            key={profiles[index + 1].id}
            profile={profiles[index + 1]}
            isTop={false}
            z={0}
            onLike={() => {}}
            onPass={() => {}}
          />
        )}

        {/* Card activa */}
        <ProfileCard
          key={profiles[index].id}
          profile={profiles[index]}
          isTop={true}
          z={10}
          onLike={() => setIndex(i => i + 1)}
          onPass={() => setIndex(i => i + 1)}
        />
      </div>
    </div>
  );
}

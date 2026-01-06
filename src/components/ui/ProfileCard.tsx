type Profile = {
  name: string;
  age: number;
  city: string;
  initials: string;
};

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="
      w-full max-w-sm
      bg-white
      rounded-3xl
      shadow-lg
      p-6
      flex flex-col items-center
      text-center
    ">
      {/* Avatar */}
      <div className="
        w-24 h-24 rounded-full
        bg-tribe-accent
        flex items-center justify-center
        text-2xl font-bold text-tribe-dark
        mb-4
      ">
        {profile.initials}
      </div>

      <h2 className="text-xl font-semibold text-tribe-dark">
        {profile.name}, {profile.age}
      </h2>

      <p className="text-tribe-dark/70">
        {profile.city}
      </p>
    </div>
  );
}

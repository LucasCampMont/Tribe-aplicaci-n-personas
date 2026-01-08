import { motion, useMotionValue, useTransform } from "framer-motion";

export default function ProfileCard({
  profile,
  onLike,
  onPass,
  isTop,
  z,
}: any) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 300], [-20, 20]);
  const likeOpacity = useTransform(x, [60, 150], [0, 1]);
  const passOpacity = useTransform(x, [-150, -60], [1, 0]);

  const handleDragEnd = (_: any, info: any) => {
    if (!isTop) return;

    if (info.offset.x > 140) {
      x.set(1000); // 👉 vuela a la derecha
      setTimeout(onLike, 200);
    } else if (info.offset.x < -140) {
      x.set(-1000); // 👈 vuela a la izquierda
      setTimeout(onPass, 200);
    }
  };

  return (
    <motion.div
      className="absolute inset-0 h-[500px] w-full bg-white rounded-3xl shadow-xl overflow-hidden cursor-grab active:cursor-grabbing"
      style={{
        x,
        rotate,
        zIndex: z,
        pointerEvents: isTop ? "auto" : "none",
      }}
      drag="x"
      dragElastic={0.7}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* LIKE */}
      <motion.div
        style={{ opacity: likeOpacity }}
        className="absolute top-6 left-6 text-green-500 text-4xl font-bold z-10"
      >
        ❤️
      </motion.div>

      {/* PASS */}
      <motion.div
        style={{ opacity: passOpacity }}
        className="absolute top-6 right-6 text-red-500 text-4xl font-bold z-10"
      >
        ❌
      </motion.div>

      <img
        src={profile.image}
        className="h-[350px] w-full object-cover"
        draggable={false}
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">
          {profile.name}, {profile.age}
        </h2>
        <p className="text-gray-600 text-sm">{profile.bio}</p>
      </div>
    </motion.div>
  );
}

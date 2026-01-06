interface TribeCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TribeCard({ children, className = "" }: TribeCardProps) {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        shadow-md
        border border-black/5
        p-4
        ${className}
      `}
    >
      {children}
    </div>
  );
}

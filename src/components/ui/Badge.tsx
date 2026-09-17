interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "teal" | "navy" | "gray";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-gray-100 text-gray-700",
    teal: "bg-teal-50 text-teal-700",
    navy: "bg-navy-900 text-white",
    gray: "bg-gray-50 text-gray-600 border border-gray-200",
  };
  return (
    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded ${variants[variant]}`}>
      {children}
    </span>
  );
}

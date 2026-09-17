import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "teal";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  href?: string;
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-navy-900 text-white hover:bg-navy-800 border border-navy-900 hover:border-navy-800",
    secondary: "bg-white text-navy-900 border border-gray-200 hover:border-navy-300 hover:bg-gray-50",
    outline: "bg-transparent text-navy-900 border border-navy-900 hover:bg-navy-900 hover:text-white",
    ghost: "bg-transparent text-navy-900 hover:bg-gray-100 border border-transparent",
    teal: "bg-teal-500 text-white hover:bg-teal-700 border border-teal-500 hover:border-teal-700",
  };

  const sizes = {
    sm: "text-sm px-4 py-2 rounded",
    md: "text-sm px-5 py-2.5 rounded",
    lg: "text-base px-7 py-3.5 rounded",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

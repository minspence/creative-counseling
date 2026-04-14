"use client";

import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "disabled";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-purple-500 font-semibold text-white py-2 px-4 rounded-md",
  secondary: "bg-gray-500 text-white py-2 px-4 rounded-md",
  disabled: "bg-gray-300 text-gray-500 py-2 px-4 rounded-md cursor-not-allowed",
};

export default function Button({
  children,
  type,
  variant = "primary",
  className,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(variantStyles[disabled ? "disabled" : variant], className)}
    >
      {children}
    </button>
  );
}

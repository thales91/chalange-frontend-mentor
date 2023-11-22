import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MoneyFormat = (
  value?: number | string,
  decimal?: number
): string => {
  return new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "USD",
    useGrouping: true,
    maximumFractionDigits: decimal || 10,
    minimumFractionDigits: 0,
  }).format(typeof value === "string" ? parseFloat(value || "0") : value || 0);
};

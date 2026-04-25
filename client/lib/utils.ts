export function formatVnd(amount: number | string) {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;
  if (!num || !Number.isFinite(num)) return "0 đ";
  return `${num.toLocaleString("vi-VN")} đ`;
}

type ApiErrorLike = {
  message?: string;
  response?: {
    data?: {
      message?: string | string[];
    };
  };
};

export function getErrorMessage(error: unknown, fallback: string) {
  const candidate = (error as ApiErrorLike).response?.data?.message;
  if (Array.isArray(candidate)) return candidate[0] || fallback;
  if (typeof candidate === "string" && candidate.length > 0) return candidate;

  const generic = (error as ApiErrorLike).message;
  return typeof generic === "string" && generic.length > 0 ? generic : fallback;
}

export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

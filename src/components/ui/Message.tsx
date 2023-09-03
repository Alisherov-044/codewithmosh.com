import { ReactNode } from "react";
import { MessageInterface } from "@/interface";
import { ErrorIcon, SuccessIcon, WarningIcon } from "@/icons";

export function Message({ message, variant, isActive }: MessageInterface) {
  let bg: string = "";
  let icon: ReactNode | undefined = undefined;

  switch (variant) {
    case "success":
      bg = "bg-green-600";
      icon = <SuccessIcon />;
      message = message || "Everything done successfully!";
      break;
    case "warning":
      bg = "bg-yellow-600";
      icon = <WarningIcon />;
      message = message || "Please check it one more time!!";
      break;
    case "error":
      bg = "bg-red-600";
      icon = <ErrorIcon />;
      message = message || "Something went wrong!!!";
      break;
    default:
      bg = "bg-green-600";
      icon = <SuccessIcon />;
      message = message || "Everything done successfully!";
      break;
  }

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 w-[400px] h-[60px] rounded-[4px] transition-all duration-200 ${bg} ${
        isActive ? "opacity-100 top-2 z-50" : "opacity-0 -z-50 -top-full"
      }`}
    >
      <div className="max-w-[22px] max-h-[22px]">{icon}</div>
      <p className="text-black font-medium text-[16px] flex-grow text-center">
        {message}
      </p>
    </div>
  );
}

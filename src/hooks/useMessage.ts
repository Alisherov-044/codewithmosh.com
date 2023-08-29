import { useState } from "react";
import { MessageInterface } from "@/interface";

export function useMessage() {
  const [message, setMessage] = useState<MessageInterface>({
    variant: "success",
    message: "",
    isActive: false,
  });

  const addMessage = ({
    variant,
    message: description,
  }: Omit<MessageInterface, "isActive">) => {
    setMessage({ ...message, variant, message: description, isActive: true });

    setTimeout(() => {
      setMessage({ ...message, isActive: false });
    }, 3000);
  };

  return {
    setMessage: addMessage,
    message: message.message,
    variant: message.variant,
    isActive: message.isActive,
  };
}

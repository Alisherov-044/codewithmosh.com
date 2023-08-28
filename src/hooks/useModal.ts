import { useState } from "react";

export function useModal() {
  const [open, setIsOpen] = useState<boolean>(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return { open, onOpen, onClose };
}

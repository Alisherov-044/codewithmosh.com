import { Button, Modal } from "..";
import { ConfirmInterface } from "@/interface";

export function Confirm({ title, open, onClose, onConfirm }: ConfirmInterface) {
  return (
    <Modal open={open} onClose={onClose} className="min-h-auto">
      <div className="w-[500px] flex flex-col gap-14">
        <h1 className="text-white font-bold">{title}</h1>
        <div className="w-full flex justify-end gap-3">
          <Button className="py-[5px]" onClick={onConfirm}>
            Yes
          </Button>
          <Button className="py-[5px]" onClick={onClose}>
            No
          </Button>
        </div>
      </div>
    </Modal>
  );
}

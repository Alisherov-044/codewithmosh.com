import { ModalInterface } from "@/interface";

export function Modal({ children, open, onClose }: ModalInterface) {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center transition-all ${
        open
          ? "opacity-100 z-40 pointer-events-auto"
          : "opacity-0 -z-40 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className="flex flex-col px-6 max-w-full min-h-[65%] bg-[#161534] rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
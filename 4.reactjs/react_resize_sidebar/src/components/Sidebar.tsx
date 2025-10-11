import { useRef, useState } from "react";
import { ChevronsLeft } from "lucide-react";
import { Menu } from "lucide-react";
import clsx from "clsx";
export default function Sidebar() {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const sidebarWidthRef = useRef<number>(230);
  const [isOpen, setOpen] = useState<boolean>(true);
  const [isDrag, setDrag] = useState(false);

  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    setDrag(true);
  };
  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    document.body.style.userSelect = "auto";
    setDrag(false);
  };
  const handleMouseMove = (e: MouseEvent) => {
    document.body.style.userSelect = "none";
    let clientX = e.clientX;
    if (!sidebarRef.current) {
      return;
    }
    if (clientX < 190) {
      clientX = 190;
    }
    if (clientX > 330) {
      clientX = 330;
    }
    sidebarRef.current.style.width = `${clientX}px`;
    sidebarWidthRef.current = clientX;
  };
  const handleHideSidebar = () => {
    if (!sidebarRef.current) {
      return;
    }
    sidebarRef.current.style.width = "0";
    setOpen(false);
  };
  const handleResetSidebar = () => {
    if (!sidebarRef.current) {
      return;
    }

    sidebarRef.current.style.width = `${sidebarWidthRef.current}px`;
    setOpen(true);
  };

  return (
    <>
      <div
        className={clsx(
          "group w-[230px] bg-[#efefef] h-full overflow-x-hidden",
          !isDrag && "transition-all"
        )}
        ref={sidebarRef}
      >
        <div className="p-5 relative h-full">
          <ChevronsLeft
            className="absolute right-[5%] opacity-0 cursor-pointer group-hover:opacity-100"
            onClick={handleHideSidebar}
          />
          <div
            className="absolute top-0 right-0 bottom-0 w-[5px] bg-gray-400 opacity-0 group-hover:opacity-100 hover:cursor-ew-resize"
            onMouseDown={handleMouseDown}
          ></div>

          <h3>Sidebar</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>
      <div className="absolute top-0 z-[999]">
        {!isOpen && (
          <Menu className="cursor-pointer" onClick={handleResetSidebar} />
        )}
      </div>
    </>
  );
}
//Kéo: Bấm chuột xuống --> Di chuyển (Giữ chuột)
//Nhả chuột --> Xóa sự kiện

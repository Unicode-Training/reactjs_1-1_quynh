import { useImperativeHandle, useRef } from "react";
type Props = {
  ref?: React.RefObject<{
    focus: () => void;
    get placeholder(): string | undefined;
    set placeholder(value: string);
  } | null>;
};

export default function Input({ ref }: Props) {
  const inputRef = useRef<null | HTMLInputElement>(null);
  //Quy ước chỉ cho phép phương thức nào của DOM
  // - placeholder (setter, getter)
  // - focus()
  useImperativeHandle(ref, () => {
    return {
      //Quy ước các phương thức ở đây
      focus: () => {
        inputRef.current?.focus();
      },
      set placeholder(val: string) {
        if (inputRef.current) {
          inputRef.current.placeholder = val;
        }
      },
      get placeholder() {
        if (inputRef.current) {
          return inputRef.current?.placeholder;
        }
        return "";
      },
    };
  });
  return (
    <div>
      <input type="text" placeholder="Nhập gì đó..." ref={inputRef} />
    </div>
  );
}

//Cơ chế: Chỉ phép sử dụng 1 số phương thức trong DOM

//Bản chất hook useImperativeHandle --> Viết lại các phương thức của DOM --> Ngăn việc ref ở bên ngoài component có thể can thiệp trái phép

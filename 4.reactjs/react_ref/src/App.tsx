import { useEffect, useRef, useState, type ChangeEvent } from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";

export default function App() {
  const PRICE = 1000;
  const [quantity, setQuantity] = useState(1);
  const inputRef = useRef<null | HTMLInputElement>(null);
  const btnRef = useRef<null | HTMLButtonElement>(null);
  const quantityRef = useRef<null | HTMLInputElement>(null);
  const input2Ref = useRef<null | HTMLInputElement>(null);
  const handleClick = () => {
    // console.log("Clicked");
  };
  // const changeEvent = new Event("change");
  const handleIncrement = () => {
    setQuantity(quantity + 1);
    // quantityRef.current?.dispatchEvent(changeEvent);
  };
  const handleDecrement = () => {
    setQuantity(quantity - 1);
    // quantityRef.current?.dispatchEvent(changeEvent);
  };
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuantity(+value);
    //Muốn xử lý tập trung ở 1 hàm
    console.log("Change");
  };
  useEffect(() => {
    // console.dir(inputRef.current);
    inputRef.current?.focus();
    btnRef.current?.click(); //trigger event
    // console.log(input2Ref);
    if (input2Ref.current) {
      console.dir(input2Ref.current);
      // input2Ref.current.placeholder = "Đổi rồi nhé";
      console.log(input2Ref.current.placeholder);

      input2Ref.current.focus();
    }
  }, []);
  return (
    <div>
      <Counter />
      <input type="text" ref={inputRef} />
      <button ref={btnRef} onClick={handleClick}>
        Click me
      </button>
      <hr />
      <div>
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          onChange={handleChangeValue}
          value={quantity}
          ref={quantityRef}
        />
        <button onClick={handleIncrement}>+</button>
      </div>
      <h3>Số tiền: {quantity * PRICE}</h3>
      <Input ref={input2Ref} />
    </div>
  );
}

// console.log(HTMLInputElement.prototype);

//Ref: Tham chiếu
// - Tham chiếu đến giá trị gần nhất (Không bị khởi tạo lại khi component re-render)
// - Tham chiếu đến element (React Element) --> Trả về DOM Node (Phù hợp khi thao tác với DOM trong React)

//DOM: document.querySelector(), document.querySelectorAll(),...

//Note:
// - ref cho phép cập nhật trực tiếp (Không giống state)
// - Không bị re-render khi ref thay đổi

//Dispatch Event

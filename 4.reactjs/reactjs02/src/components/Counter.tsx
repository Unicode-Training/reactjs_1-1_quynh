import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const [msg, setMessage] = useState<string>("");
  const [prevImage, setPreviewImage] = useState("");
  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prev) => prev + 1);
  };
  const handleUpdateMessage = () => {
    setMessage("Unicode");
  };
  useEffect(() => {
    console.log("Effect Count: " + count);
    return () => {
      //cleanup
      console.log(`Cleanup: `, count);
    };
  }, [count]);
  console.log("Counter re-render:", count);
  const handleChooseImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(prevImage);
    };
  }, [prevImage]);
  return (
    <div>
      {/* {console.log("Update ui: " + count)} */}
      <h1>Count: {count}</h1>
      <h2>{msg}</h2>
      <button>-</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleUpdateMessage}>Update Message</button>
      <hr />
      <div>
        <input type="file" onChange={handleChooseImage} />
      </div>
      <div>{prevImage && <img src={prevImage} width={200} />}</div>
    </div>
  );
}

//Flow Component React:
//State thay đổi --> Re-render --> Update UI
//Trong component phát sinh các công việc khác ngoài nhiệm vụ update giao diện --> Gọi Side Effect (Công việc bên lề)

//useEffect(callback, dependencies) --> Quản lý các công việc bên lề

//dependencies: Điều kiện để callback trong useEffect chạy
// - null, undefiend --> Component re-render --> callback sẽ chạy
// - [] --> Chỉ chạy lần đầu (Sau lần render đầu tiên) --> Mounting
// - [var1, var2,...] --> Khi nào 1 trong các biến thay đổi --> Callback sẽ chạy --> Updating

//Component Lifecycle
// 1. Mounting --> Khi component được hình thành và đưa vào DOM
// 2. Updating --> Từ lần render thứ 2 trở đi
// 3. Unmounting --> Khi component chuẩn bị loại khỏi DOM

//Trong lập trình phần mềm --> Rõ rỉ bộ nhớ

//Cleanup
// - state không dùng đến
// - event listener
// - timer: setTimeout, setInterval,...
// = storage: localStorage, sessionStorage, blob,...

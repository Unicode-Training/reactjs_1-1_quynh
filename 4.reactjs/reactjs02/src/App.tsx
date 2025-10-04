import Button from "./components/Button";
import Counter from "./components/Counter";

export default function App() {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <div>
      <h1>Học React</h1>
      <h2>Học React không khó</h2>
      <Button title="Click me" onClick={handleClick} />
      <Counter />
    </div>
  );
}

//State --> Trạng thái, dữ liệu trong nội bộ component
//Functional muốn sử dụng state --> Hook (Hàm đặc biệt cho phép can thiệp vào core của react)
//Sử dụng hook: useState()
//Cú pháp; const [tenState, hamSetState] = useState(giatrikhoitao);

//Đặc điểm của state
// - Bất biến (Không cập nhật trực tiếp được)
// - Muốn cập nhật --> Thông qua hàm cập nhật
// - Khi state thay đổi --> Re-render component (Tự gọi lại hàm component)
// + Nguyên thủy: Thay đổi value
// + Tham chiếu: Thay đổi tham chiếu

// console.log("ahihi");

//Browser DOM (DOM Thật)
// const h1 = document.createElement("h1");
// h1.innerText = "Xin chào";
// const root = document.querySelector("#root");
// root?.append(h1);

//JS thuần:
// createElement --> DOM --> Render Browseer

//DOM Ảo: Object được copy từ DOM thật --> Khi cập nhật --> Cập nhật trên DOM ảo --> Thuật toán diff --> So sánh với DOM thật --> Chỉ cập nhật trên DOM thật những gì thực sự thay đổi

//React: ReactDOM, React Element

//React Element --> ReactDOM --> Browser DOM --> Hiển thị giao diện cho người dùng nhìn thấy

//Cú pháp JSX (Gần giống với HTML)

//JSX --> Compiler (Babel, SWC) --> React Element --> ReactDOM --> Browser DOM
import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
// const h1 = React.createElement("h1", {}, "Học React không khó");
// const h2 = React.createElement("h2", {}, "Học React");
// const div = React.createElement(Fragment, {}, h1, h2);
const handleClick = (e) => {
  //e = event object
  console.log("Ok chưa?", e);
};
//event handler có tham số
const handleClick2 = (id: number, e: React.MouseEvent) => {
  console.log(id);
  console.log(e);
  // e.target.innerText = "clicked";
};
const title = "Ahihi";
const isLogin = true;
const active = true;
const users = ["User 1", "User 2", "User 3"];
const usersJsx = users.map((user, index) => <li key={index}>{user}</li>);
//Functional component
const Product = ({
  name,
  children,
}: {
  name?: string;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <h3>{name}</h3>
      {children}
    </>
  );
};

//Class component
class User extends React.Component {
  render() {
    return <h3>Người dùng</h3>;
  }
}
const div = (
  <Fragment>
    <h1 className="title" id="title-1">
      Học React không khó
    </h1>
    {isLogin && <h2>Học React</h2>}
    {active ? <h2>{title}</h2> : <h3>Không xác định</h3>}
    <button onClick={handleClick}>Click me</button>
    <button
      onClick={(e) => {
        handleClick2(10, e);
      }}
    >
      Click me 2
    </button>
    <ul>{usersJsx}</ul>
    <Product name="Sản phẩm 1" />
    <Product name="Sản phẩm 2" />
    <Product name="Sản phẩm 3">
      <h2>Ok chưa?</h2>
    </Product>
    <User />
  </Fragment>
);

//camelCase: onclick --> onClick
//parse --> {}
//Event --> Khi khai báo props là event --> giá trị phải là 1 callback không có tham số
//Nếu event handler có tham số --> Bọc 1 hàm không có tham số ra bên ngoài trước khi truyền vào event của react

//Trong jsx: ?: (3 ngôi), ?? (nullist), &&, ||, !

const rootEl = document.querySelector("#root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(div);
}

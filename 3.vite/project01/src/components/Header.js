import style from "../assets/header.module.scss";

export const Header = () => {
  return `
    <header>
        <h1>Header</h1>
        <button class="${style.btn}">Click me</button>
    </header>
    `;
};

//Biến môi trường

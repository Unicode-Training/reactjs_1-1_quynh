import style from "../assets/footer.module.scss";
export const Footer = () => {
  return `
    <footer>
        <h1>Footer</h1>
        <button class="${style.btn}">Click me</button>
    </footer>
    `;
};

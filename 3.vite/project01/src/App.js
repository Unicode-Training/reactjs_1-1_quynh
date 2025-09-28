import moment from "moment";
import { Header } from "./components/Header";
import img01 from "./assets/images/blog_image.png";
import { Footer } from "./components/Footer";
export const App = () => {
  return `
  ${Header()}
  <h1>App: ${moment().format("DD/MM/YY HH:mm:ss")}</h1>
  <div>
  <img src="${img01}" style="width: 300px"/>
  </div>
  <div>
  <img src="/vite.svg" style="width: 300px"/>
  </div>
    ${Footer()}
  `;
};

//public: static assets --> Truy cập thông qua http (url)
//absolute path, relative path

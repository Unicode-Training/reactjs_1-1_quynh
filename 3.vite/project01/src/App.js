import moment from "moment";
import { Header } from "./components/Header";
import img01 from "./assets/images/blog_image.png";
import { Footer } from "./components/Footer";
import config from "./config.json";
const { LIMIT, TITLE_DEFAULT } = config;
export const App = () => {
  // console.log(import.meta.env);
  console.log(LIMIT, TITLE_DEFAULT);
  return `
  ${Header()}
  <h1 class="text-3xl text-center text-red-600">App: ${moment().format(
    "DD/MM/YY HH:mm:ss"
  )}</h1>
  <div>
  <img src="${img01}" style="width: 300px"/>
  </div>
  <div>
  <img src="/vite.svg" style="width: 300px"/>
  </div>
  ${import.meta.env.VITE_API_SERVER}
  ${import.meta.env.VITE_GOOGLE_CLIENT_ID}
    ${Footer()}
  `;
};

//public: static assets --> Truy cập thông qua http (url)
//absolute path, relative path

//Dev --> API_SERVER, api key, ... --> .env
//Staging/Test --> API_Server, api key,... --> .env
//Production --> API_Server, api key,.. --> .env

//Ví dụ tình huống

//Dev
// env: vari1, vari2

//Producion

//env: vari1, vari2 --> rebuild

//Note: Khi truy cập chạy qua file build (Trừ bản dev)

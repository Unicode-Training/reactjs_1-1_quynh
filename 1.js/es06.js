//Destructuring: Phá vỡ cấu trúc của array, object để truy cập vào các thuộc tính, index và trả về các biến riêng biệt
// - Array
// - Object

// const user = {
//   name: "Quỳnh",
//   email: "quynh@gmail.com",
//   address: "Hồ Chí Minh",
//   age: 25,
// };
// console.log(user);
// const { name: fullname, email, address, age = 25 } = user;
// const { name, email, ...rest } = user;
// console.log(name);
// console.log(email);
// console.log(rest);

// const users = ["An", "hoangan.web@gmail.com", "Hà Nội", 33];
// const [fullname, email, , age] = users;
// console.log(fullname);
// console.log(email);
// console.log(age);
// const [fullname, ...rest] = users;
// console.log(fullname);
// console.log(rest);

//const [, setSearchParams] = useSearchParams()

// const key = "email";
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };

// console.log(user.key);

// const profile = {
//   displayName: "Hoàng An",
//   emails: [
//     {
//       email: "hoangan.web@gmail.com",
//     },
//     {
//       email: "contact@gmail.com",
//     },
//   ],
// };
// console.log(profile);
// const {
//   displayName,
//   emails: [{ email: email1 }, { email: email2 }],
// } = profile;
// console.log(displayName);
// console.log(email1);
// console.log(email2);

//Arrow function
// - Function rút gọn
// - Không thay thế function truyền thống
// const doSomething = function () {
//   console.log("Ok chưa?");
// };
// doSomething();

// const doSomething = (msg, type = "success") => {
//   console.log("Ok chưa?", msg);
//   console.log(type);
// };
// doSomething("Hoàng An", "error");

// const sum = (a, b) => a + b;
// console.log(sum(10, 29));

//{} --> block code
// const getUser = () => ({ name: "Hoàng An", email: "hoangan.web@gmail.com" });
// console.log(getUser());

// const useStore = create((set) => {
//   return {
//     count: 1,
//     inc: () => {
//       return set((state) => {
//         return { count: state.count + 1 };
//       });
//     },
//   };
// });

// const useStore = create((set) => {
//   return {
//     count: 1,
//     inc: () => set((state) => ({ count: state.count + 1 })),
//   };
// });

// const getOptions = ({ color, theme, ...opt }) => {
//   //   const { color, theme } = opt;
//   console.log(color);
//   console.log(theme);
//   console.log(opt);
// };
// getOptions({
//   color: "red",
//   theme: "dark",
//   initiSize: 20,
// });

//Spread Operator: Dải các phần tử trong object, array ra ngoài
// const oldObj = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const newObj = {
//   password: "1234",
//   address: "Hà Nội",
//   ...oldObj,
// };
// const newObj = { ...oldObj };
// console.log(newObj);

// const myArr = ["Item 1", "Item 2", "Item 3"];
// const newArr = ["Item 4", ...myArr, "Item 5"];
// console.log(newArr);

// const sum = (a, b, c) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };
// const args = [10, 20, 30];
// sum(...args); //Spread Operator
// sum.apply(null, args);

//Rest parameter
// const sum = (...args) => {
//   console.log(args);
// };
// sum(10, 20, 30, 40, 50, 60);

//Bất biến
// const myState = Object.freeze({
//   products: ["Product 1", "Product 2"],
//   message: "",
// });

// const setState = (newState) => {
//   return newState;
// };

//Spread
// let newState = setState({ ...myState, message: "Ok chưa?" });
// console.log(newState);

// let newState = setState({
//   ...myState,
//   products: [...myState.products, "Product 3"],
// });
// console.log(newState);

//Tham chiếu trong array, object
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const customer = { ...user }; //Tham chiếu đến cùng 1 địa chỉ
// customer.name = "Hoàng An Unicode";
// console.log(user);
// console.log(customer);

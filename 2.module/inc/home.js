//member:
// - variable
// - function
// - class

//Muốn cho ai dùng cái gì thì người đó mới được dùng
const a = 10;
const b = 20;
export const c = 30;

// export default function doSomething() {
//   console.log("doSomething");
// }
const doSomething = function () {
  console.log("doSomething");
};

//Export
// - default: Trong 1 file chỉ có 1 default
// - named: Trong 1 file sẽ có nhiều named

export default doSomething;
export { a, b };

//Lưu ý: Cách viết export default trực tiếp phía trước member chỉ áp dụng với function truyền thống hoặc class

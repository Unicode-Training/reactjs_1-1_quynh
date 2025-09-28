// alert("An"); //Hàm đồng bộ, khi nào nó chạy xong thì các câu lệnh bên dưới sẽ chạy
// console.log("Hoàng An");

//Bất đồng bộ: Đến lượt thì sẽ chạy, không cần quan tâm lệnh phía trước xong hay chưa?
// setTimeout(() => {
//   console.log("Xin chào");
// }, 2000);
// console.log("Ok bạn");

//Xử lý bất đồng bộ: Biến các tác vụ bất đồng bộ thành đồng bộ --> Giải quyết các bài toán đồng bộ
//Ví dụ: Click button --> Lấy dữ liệu từ server --> Hiển thị dữ liệu từ server lên trình duyệt
//Callback

// const getUser = (callback) => {
//   setTimeout(() => {
//     const user = {
//       name: "Hoàng An",
//       email: "hoangan.web@gmail.com",
//     };
//     callback(user);
//   }, 2000);
// };
// const getProduct = (callback) => {
//   setTimeout(() => {
//     const product = {
//       name: "Product 1",
//     };
//     callback(product);
//   }, 1000);
// };
// getUser((data) => {
//   console.log(data);
//   getProduct((data) => {
//     console.log(data);
//     //Thêm tác vụ
//   });
// });
//Callback hell

//Promise: Đối tượng đặc biệt dùng để xử lý các tác vụ bất đồng bộ
//Chaining: a().b().c().d()

//Trạng thái của Promise:
// - pending: Chờ thực hiện
// - fulfilled: Thực hiện thành công (resolve)
// - rejected: Thực hiện thất bại (rejected)

//1. Tạo đối tượng Promise (Hứa)
// const myPromise = new Promise((resolve, reject) => {
//   //resolve là 1 hàm chứa dữ liệu nếu tác vụ thành công
//   //reject là 1 hàm chứa thông báo lỗi nếu tác vụ thất bại
//   setTimeout(() => {
//     const user = {
//       name: "Hoàng An",
//     };
//     // resolve(user);
//     reject("Đã có lỗi khi lấy user");
//   }, 2000);
// });

//2. Gọi dữ liệu của promise (Thực hiện lời hứa)

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Hoàn thành");
//   });

//Ví dụ thực tế của finally
// Tạo loading UI khi call API
// Popup: Đăng nhập thành công hay hay thất bại --> Sau 3s đều phải đóng popup

//then cũng là 1 promise --> có thể .then tiếp
//catch cũng là 1 promise

// const myPromise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       name: "Product 1",
//     });
//   }, 1000);
// });
// const myPromise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       name: "Course 1",
//     });
//   }, 1500);
// });
// myPromise
//   .then((data) => {
//     console.log(data);
//     return myPromise2;
//   })
//   .catch((error) => {
//     console.log(error);
//     return myPromise2;
//   })
//   .then((data) => {
//     console.log(data);
//     return myPromise3;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .finally(() => {
//     console.log("Hoàn thành");
//   });

// myPromise.then((data) => {
//   console.log(data);
//   myPromise2.then((data) => {
//     console.log(data);
//     myPromise3.then((data) => {
//       console.log(data);
//     });
//   });
// });

//Promise.all()

//Bài toán
// const getUser = (userId) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const users = [
//         {
//           id: 1,
//           name: "User 1",
//           salary: 1000,
//         },
//         {
//           id: 2,
//           name: "User 2",
//           salary: 2000,
//         },
//         {
//           id: 3,
//           name: "User 3",
//           salary: 3000,
//         },
//         {
//           id: 4,
//           name: "User 4",
//           salary: 4000,
//         },
//       ];
//       const user = users.find((user) => user.id === userId);
//       resolve(user);
//     }, Math.random() * 2000);
//   });
// };

// const ids = [1, 3, 4];
//Tính tổng salary của tất cả user trong mảng ids
// const totalPromise = new Promise((resolve) => {
//   let total = 0;
//   let count = 0;
//   for (let i = 0; i < ids.length; i++) {
//     getUser(ids[i]).then((data) => {
//       total += data.salary;
//       count++; //Khi getUser trả về dữ liệu --> tăng count
//       if (count === ids.length) {
//         resolve(total);
//       }
//     });
//   }
// });

// totalPromise.then((data) => {
//   console.log(data);
// });

//Note: Trong các tác vụ bất đồng bộ, nếu muốn 1 kết quả chờ đợi trước khi thực hiện tác vụ khác --> Đưa kết quả đó vào promise

//Promise.all --> Chờ danh sách các promise xử lý xong thì trả về tất cả (Không phải xử lý cùng 1 lúc)
//Cú pháp: Promise.all(promiseArray) --> Nhận vào 1 mảng chứa tất cả các promise cần xử lý
// const promiseArray = ids.map((id) => getUser(id));
// Promise.all(promiseArray).then((data) => {
//   const total = data.reduce((acc, cur) => acc + cur.salary, 0);
//   console.log(total);
// });

// setTimeout(() => {
//   console.log(1);
// }, 0); //3

// console.log(2); //1

// Promise.resolve(3).then((data) => {
//   console.log(data);
// }); //2

//1. callstack
//2. microtask queue
//3. macrotask queue

//async function, await keyword
//async function luôn trả về 1 promise
//await keyword chờ 1 promise thực hiện xong (1 lần gọi await là 1 lần then trong promise)
//await keyword chỉ hoạt động trong async function (Trừ môi trường nodejs)
//Lưu ý: await chỉ áp dụng để thực thi promise (Không áp dụng với các trường hợp khác)
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      getData: new Promise((resolve) => {
        resolve("Unicode");
      }),
    });
  }, 2000);
});
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Do something 2");
    // reject("Failed to fetch");
  }, 1000);
});
const something = async () => {
  // const data1 = await myPromise; //then
  // const data2 = await myPromise2; //then
  // console.log(data1);
  // console.log(data2);
  // const { getData } = await myPromise;
  // const data = await getData;
  // console.log(data);

  try {
    ahihi();
    const data2 = await myPromise2; //then
    console.log(data2);
    let a = 1;
    //throw
    if (a < 0) {
      throw new Error("a phải là số dương");
    }
    console.log("Log này không chạy");
  } catch {
    console.log("Chúng tôi đang cố gắng khác phục lỗi này");
  } finally {
    console.log("Hoàn thành");
  }
};
something();

//try..catch...finally --> Xử lý lỗi ngoại lệ

//fetch() --> Tự động trả về promise
//axios --> Tự động trả về promise

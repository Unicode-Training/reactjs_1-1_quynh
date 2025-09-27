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
const myPromise = new Promise((resolve, reject) => {
  //resolve là 1 hàm chứa dữ liệu nếu tác vụ thành công
  //reject là 1 hàm chứa thông báo lỗi nếu tác vụ thất bại
  setTimeout(() => {
    const user = {
      name: "Hoàng An",
    };
    // resolve(user);
    reject("Đã có lỗi khi lấy user");
  }, 2000);
});

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

const myPromise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      name: "Product 1",
    });
  }, 1000);
});
const myPromise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      name: "Course 1",
    });
  }, 1500);
});
myPromise
  .then((data) => {
    console.log(data);
    return myPromise2;
  })
  .catch((error) => {
    console.log(error);
    return myPromise2;
  })
  .then((data) => {
    console.log(data);
    return myPromise3;
  })
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("Hoàn thành");
  });

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

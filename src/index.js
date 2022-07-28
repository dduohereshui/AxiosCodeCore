import axios from "./axios";

const btn = document.getElementById("send");

// console.log(axios);
// btn.onclick = function () {
//   axios.get("http://localhost:3000/posts/2").then((res) => {
//     console.log(res);
//   });
// };
// console.dir(axios);
const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

// console.dir(instance);
instance.interceptors.request.use(
  (config) => {
    console.log("1 request interceptor");
    return config;
  },
  (err) => {
    return err;
  }
);
instance.interceptors.request.use(
  (config) => {
    console.log("2 request interceptor");

    return config;
  },
  (err) => {
    return err;
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log("1 response interceptor");
    return response;
  },
  (err) => {
    return err;
  }
);
instance.interceptors.response.use(
  (response) => {
    console.log("2 response interceptor");

    return response;
  },
  (err) => {
    return err;
  }
);
instance
  .get({
    url: "/getUser",
    method: "get",
    timeout: 4000,
  })
  .then((res) => {
    console.log(res);
  });

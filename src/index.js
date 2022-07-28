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
instance.get("/getUser", {
  method: "get",
  timeout: 4000,
});

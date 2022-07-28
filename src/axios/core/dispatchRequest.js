// 真正去发送请求的函数
export function dispatchRequest(config) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "cjl",
        age: 20,
      });
    }, 2000);
  });
}

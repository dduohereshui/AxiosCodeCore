import { InterceptorManager } from "./InterceptorManager";
function Axios(defaultConfig) {
  this.defaults = defaultConfig;
  // 定义拦截器
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager(),
  };
}
Axios.prototype.request = function (config) {
  // 处理第一个参数传入string类型的参数
  if (typeof config === "string") {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }
  // 合并defaultConfig 和 用户传入的config
  config = Object.assign({}, this.defaults, config);

  console.log(config, "要去发送请求了");
};

["get", "post", "head", "delete"].forEach((method) => {
  Axios.prototype[method] = function (...config) {
    return this.request(...config);
  };
});

export { Axios };

import { InterceptorManager } from "./InterceptorManager";
import { dispatchRequest } from "./dispatchRequest";
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
  console.log(this.interceptors);
  // 拦截器核心
  let promise = Promise.resolve();
  const chain = [dispatchRequest, undefined];
  console.log(this.interceptors);
  // 取出拦截器
  if (this.interceptors.request.handlers.length) {
    this.interceptors.request.handlers.reverse().forEach((handler) => {
      chain.unshift(handler.fulfilled, handler.rejected);
    });
  }
  if (this.interceptors.response.handlers.length) {
    this.interceptors.response.handlers.forEach((handler) => {
      chain.push(handler.fulfilled, handler.rejected);
    });
  }
  console.log(chain);
  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }
  console.log(config, "要去发送请求了");
  return promise;
};

["get", "post", "head", "delete"].forEach((method) => {
  Axios.prototype[method] = function (...config) {
    return this.request(...config);
  };
});

export { Axios };

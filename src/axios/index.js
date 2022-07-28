import { Axios } from "./core/Axios";
import { defaults } from "./core/defaults";
import { extend } from "./utils/extend";
function createInstance(defaultConfig) {
  // 拿到Axios的实例对象（defaults interceptor）
  const context = new Axios(defaultConfig);
  // instance的功能和request一样，this指向为 context
  const instance = Axios.prototype.request.bind(context);
  // 将defaults对象 get，create函数等挂到instance上
  extend(instance, Axios.prototype, context);
  extend(instance, context);

  return instance;
}

const axios = createInstance(defaults);

axios.Axios = Axios;

// 用户通过axios.create 创建一个新的axios实例
axios.create = function (config) {
  return createInstance(config);
};

export default axios;

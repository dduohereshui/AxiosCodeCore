export function InterceptorManager() {
  this.handlers = [];
}
InterceptorManager.prototype.use = function (fulfilled, rejected) {
  this.handlers.push({
    fulfilled,
    rejected,
  });
};

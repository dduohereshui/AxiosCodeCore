export function extend(target, source, context = target) {
  if (source) {
    for (const prop in source) {
      if (source.hasOwnProperty(prop)) {
        if (typeof source[prop] === "function") {
          target[prop] = source[prop].bind(context);
        } else {
          target[prop] = source[prop];
        }
      }
    }
  }
  return target;
}

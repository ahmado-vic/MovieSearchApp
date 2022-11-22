export const debounce = (fun, delay) => {
  let time;
  return (...args) => {
    if (time) {
      clearTimeout(time);
    }
    time = setTimeout(() => {
      fun(...args);
    }, delay);
  };
};

const debounceTime = val => {
  let timerId;

  return val => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
  }, 2500
  );
  }
};

export default debounceTime;
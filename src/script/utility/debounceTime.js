const debounceTime = val => {
  let timerId;

  return val => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
    console.log(val);
  }, 2500
  );
  }
};

export default debounceTime;
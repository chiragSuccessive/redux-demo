const setText = (value) => ({
  type: "SET-TEXT",
  value,
});

const setCount = () => ({
  type: "SET-COUNT",
});

export { setCount, setText };
const countValue = document.querySelector("#counter");

const increment = () => {
  //getting the value from UI
  let value = parseInt(countValue.innerText);

  //update the value onto UI
  value = value + 1;
  countValue.innerText = value;
};

const decrement = () => {
  //getting the value from UI
  let value = parseInt(countValue.innerText);

  //update the value onto UI
  value = value - 1;
  countValue.innerText = value;
};

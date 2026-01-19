const range = document.getElementById("range");
const compare = document.querySelector(".compare");

const updatePosition = (value) => {
  compare.style.setProperty("--pos", `${value}%`);
  compare.style.setProperty("--pos-num", value);
};

updatePosition(range.value);

range.addEventListener("input", (event) => {
  updatePosition(event.target.value);
});


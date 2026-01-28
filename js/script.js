// const h1 = document.querySelector("h1");
// let value = 1;
// const handleadd = () => {
//   value++;
//   h1.innerHTML = value;
// };
// const handleremove = () => {
//   if (value != 1) {
//     value--;
//     h1.innerHTML = value;
//   }
// };

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

const button = document.querySelector(".myButton");
const h1 = document.querySelector(".myH1");

// const handlebutton = () => {
//   h1.style = "color:red";
// };

button.addEventListener("click", () => {
  h1.style = "color:blue";
});
  
// const cube = document.querySelector(".cube");
// cube.addEventListener("onkeyup", avance);

// let left = 0;

// function avance(event) {
//   console.log(event.key);
//   left += 5;
//   return (cube.style.left = `${left}px`);
// }

const btn = document.querySelector("button");
console.log(btn);
// btn.addEventListener("click", displayWord);

const carre = document.querySelector("article");
console.log(carre);

// const input = document.querySelector("input");
// input.addEventListener("keyup", (event) => {
//   // if (event.key === "ArrowRight") {
//   //   btn.style.backgroundColor = "pink";
//   // }
//   switch (event.key) {
//     case "ArrowRight":
//       carre.style.backgroundColor = "red";
//       break;

//     default:
//       break;
//   }
// });
let y = 0;
let x = 0;

document.addEventListener("keydown", (event) => {
  // if (event.key === "ArrowRight") {
  //   btn.style.backgroundColor = "pink";
  // }
  console.log(event.key);

  switch (event.key) {
    case "ArrowRight":
      console.log("en avant!");
      carre.style.left = `${(x += 2)}rem`;
      break;
    case "ArrowLeft":
      console.log("en arrière!");
      carre.style.left = `${(x -= 2)}rem`;
      break;
    case "ArrowUp":
      console.log("en haut!");
      carre.style.top = `${(y -= 2)}rem`;
      break;
    case "ArrowDown":
      console.log("en bas!");
      carre.style.top = `${(y += 2)}rem`;
      break;

    default:
      console.log("ce n'est pas bon");
      break;
  }
});

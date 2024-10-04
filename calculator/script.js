const body = document.body;

const e = document.createElement("div");
const input = document.createElement("input");
body.appendChild(e);
body.appendChild(input);
const s = document.querySelector("div");
console.log(s.textContent);
console.log(s.innerText);
console.log(s.innerHTML);

//----------------------------------------------//
var userLeft = false;
var userWatchinCatMem = false;

var p = new Promise((resolve, reject) => {
  if (!userLeft && !userWatchinCatMem)
    return resolve("Thumbs up and subscribe");
  else if (userLeft) return reject({ name: "user left", message: ":(" });
  else
    return reject({ name: "User watching cat meme", message: "webDev < cat" });
});

p.then((response) => console.log(response)).catch((error) =>
  console.log(error.message)
);

let container = document.getElementById("container");
let button = document.getElementById("showProgressBar");

button.addEventListener("click", () => {
  var progressBar = document.createElement("div");
  progressBar.className=("progressBar");
  var innerProgressBar = document.createElement("div");
  innerProgressBar.className=("innerProgressBar");

  progressBar.append(innerProgressBar);
  container.append(progressBar);

  setTimeout(() => {
    innerProgressBar.style.width = "100%";
  }, 100);
});

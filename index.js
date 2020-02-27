// window.onload = first;
window.addEventListener("load", first);

function first() {
  let h1 = document.getElementsByTagName("h1")[0];
  console.log(h1);
  h1.style.backgroundColor = "yellow";
  let button = document.createElement("button");
  button.innerText = "Dynamic";
  //   button.style.backgroundColor = "darkblue";
  //   button.style.color = "aqua";
  //   button.style.border = "none";
  button.className = "green blue";
  //   button.className = "blue"; ->Over write
  //   button.classList.add("blue");
  button.classList.remove("blue");
  let div = document.getElementsByTagName("div")[0];
  div.appendChild(button);
}

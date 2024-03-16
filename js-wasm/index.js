import * as wasm from "hello-rust";

document.querySelector("#btn").addEventListener("click", greet);

function greet() {
  const val = document.querySelector(".input").value;
  wasm.greet(val);
}

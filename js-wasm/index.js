import { greet, Universe } from "hello-rust";

let raf;

document.querySelector("#btn").addEventListener("click", handleGreet);
document.querySelector("#btnStop").addEventListener("click", () => {
  if (raf) {
    cancelAnimationFrame(raf);
  }
});

function handleGreet() {
  const val = document.querySelector(".input").value;
  greet(val);
  startGame(val);
}

function startGame(val) {
  if (raf) {
    cancelAnimationFrame(raf);
  }

  const pre = document.getElementById("game-of-life-canvas");
  const universe = Universe.new(val, val);

  const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();

    raf = requestAnimationFrame(renderLoop);
  };

  raf = requestAnimationFrame(renderLoop);
}

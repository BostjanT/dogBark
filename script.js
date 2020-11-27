const first = document.getElementById("first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

const dogBark = document.getElementById("dog-bark");
const dogHowl = document.getElementById("dog-howl");

function expandFirst() {
  const first = document.getElementById("first");

  first.classList.toggle("stylish");
  first.classList.contains("stylish")
    ? first.classList.add("grow")
    : first.classList.remove("grow");
  first.classList.contains("stylish") ? dogBark.play() : dogHowl.play();
}
function expandSecond() {
  let second = document.getElementById("second");
  second.classList.toggle("stylish");
  second.classList.contains("stylish")
    ? second.classList.add("grow")
    : second.classList.remove("grow");
  second.classList.contains("stylish") ? dogBark.play() : dogHowl.play();
}
function expandThird() {
  let third = document.getElementById("third");
  third.classList.toggle("stylish");
  third.classList.contains("stylish")
    ? third.classList.add("grow")
    : third.classList.remove("grow");
  third.classList.contains("stylish") ? dogBark.play() : dogHowl.play();
}

first.addEventListener("click", expandFirst);
second.addEventListener("click", expandSecond);
third.addEventListener("click", expandThird);

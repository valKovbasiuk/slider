let slider = document.querySelector(".js-slider");
let backButton = slider.querySelector(".slider__button-back");
let nextButton = slider.querySelector(".slider__button-next");
backButton.addEventListener("click", backward);
nextButton.addEventListener("click", forward);
var slidesNumber = slider.querySelectorAll(".item").length;
let contentToShift = slider.querySelector(".slider__content-wrapper");
let position = contentToShift.style.left;

function backward() {
  if (position > -((slidesNumber - 1) * 100)) {
    position -= 100;
    console.log(position);
  } else {
    position = 0;
  }
  contentToShift.style.left = position + "%";
}
function forward() {
  if (position != 0) {
    position += 100;
  } else {
    position = -((slidesNumber - 1) * 100);
  }
  console.log(position);
  contentToShift.style.left = position + "%";
}

console.log(slider);
console.log(backButton);
console.log(nextButton);
console.log(position);
console.log(contentToShift);

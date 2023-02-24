"use strict";

const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    // Gets the position of the box relative to the viewport
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", checkBoxes);

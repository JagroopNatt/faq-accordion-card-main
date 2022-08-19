"use strict";

const question = document.querySelectorAll(".question");

const arrowIcon = document.querySelectorAll(".arrow-icon");

question.forEach(function (ques) {
  ques.addEventListener("click", function () {
    ques.classList.toggle("active");

    // selecting answer
    const answer = ques.nextElementSibling;
    answer.classList.toggle("hide");

    //rotating arrow
    arrowIcon.forEach(function (arrow) {
      arrow.classList.toggle("rotate");
    });
  });
});

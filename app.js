const questions = document.querySelectorAll(".question");

questions.forEach(function (e) {
  const btn = e.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (i) {
      if (i !== e) {
        i.classList.remove("show-text");
      }
    });
    e.classList.toggle("show-text");
  });
});

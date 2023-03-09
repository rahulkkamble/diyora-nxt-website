window.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  let verticleSlider = document.querySelectorAll(".slide-indicator");
  const prev = document.querySelector(".carousel-control-prev");
  const next = document.querySelector(".carousel-control-next");

  let count = 0;

  function currentSlide() {
    verticleSlider.forEach((v, i) => {
      if (i === count) {
        return v.classList.add("activated");
      } else {
        return v.classList.remove("activated");
      }
    });
  }
  setInterval(() => {
    if (count < 2) {
      count++;
    } else {
      count = 0;
    }
    currentSlide();
  }, 5000);

  prev.addEventListener("click", () => {
    if (count <= 0) {
      count = 0;
    } else {
      count--;
    }

    currentSlide();
  });
  next.addEventListener("click", () => {
    if (count < 2) {
      count++;
    } else {
      count = 0;
    }
    currentSlide();
  });

  verticleSlider.forEach((v) => {
    v.addEventListener("click", () => {
      verticleSlider.forEach((ele) => {
        if (ele == v) return;
        ele.classList.remove("activated");
      });
      v.classList.add("activated");
    });
  });
});

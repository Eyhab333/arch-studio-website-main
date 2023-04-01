document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");

  const buttons = carousel.querySelectorAll(".carousel__navigation-item");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__navigation-item--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__navigation-item--selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__navigation-item--selected");
});

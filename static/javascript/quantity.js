document.addEventListener("DOMContentLoaded", () => {
  const plusButtons = document.querySelectorAll(".plus");
  const minusButtons = document.querySelectorAll(".minus");

  plusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantitySpan = btn.previousElementSibling;
      let current = parseInt(quantitySpan.textContent);
      if (current < 100) { 
        quantitySpan.textContent = current + 1;
      }
    });
  });

  minusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantitySpan = btn.nextElementSibling;
      let current = parseInt(quantitySpan.textContent);
      if (current > 0) { 
        quantitySpan.textContent = current - 1;
      }
    });
  });
});

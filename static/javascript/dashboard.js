// FOR SIDEBAR TOGGLE FUNCTION
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && sidebar) {
    // TOGGLE MENU BAR
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        sidebar.classList.toggle("active");
    });

    // WHEN THE USER CLICK OUTSIDE THE SIDEBAR
    document.addEventListener("click", (e) => {
        if (sidebar.classList.contains("active") &&
            !sidebar.contains(e.target) &&
            !menuBtn.contains(e.target)) {
            sidebar.classList.remove("active");
        }
    });
}

// PARA SA POPUP FUNCTIONS MODAL
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("cartModal");
    const closeModal = document.getElementById("closeModal");
    const cartItems = document.getElementById("cartItems");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const foodItem = button.closest(".food-item");
            const name = foodItem.querySelector("p").innerText;
            const quantity = foodItem.querySelector(".quantity").innerText;

            if(quantity === "0") {
                alert("Please select a quantity first!");
                return;
            }

            const li = document.createElement("li");
            li.textContent = `${name} x ${quantity}`;
            cartItems.appendChild(li);

            let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
            cart.push(`${name} x ${quantity}`);
            localStorage.setItem("cartItems", JSON.stringify(cart));

            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if(event.target === modal) {
            modal.style.display = "none";
        }
    });

    const goToChartBtn = document.getElementById("goToChart");
    if(goToChartBtn) {
        goToChartBtn.addEventListener("click", () => {
            window.location.href = "/chart"; 
        });
    }
});

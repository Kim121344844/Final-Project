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

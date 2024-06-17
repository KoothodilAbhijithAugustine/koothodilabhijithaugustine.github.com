document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    
    // Set initial theme based on user preference or default to dark
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-theme");
        toggleButton.textContent = "Switch to Dark Theme";
    } else {
        body.classList.remove("light-theme");
        toggleButton.textContent = "Switch to Light Theme";
    }

    // Event listener for the theme toggle button
    toggleButton.addEventListener("click", function() {
        if (body.classList.contains("light-theme")) {
            body.classList.remove("light-theme");
            toggleButton.textContent = "Switch to Light Theme";
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.add("light-theme");
            toggleButton.textContent = "Switch to Dark Theme";
            localStorage.setItem("theme", "light");
        }
    });
});

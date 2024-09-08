
document.addEventListener("DOMContentLoaded", () => {
    const colorChange = document.getElementById("colorChange");
    const sections = document.querySelectorAll(".color-change");

    const storedColor = localStorage.getItem("sectionColor");
    if (storedColor) {
        sections.forEach(section => {
            section.style.backgroundColor = storedColor;
        });
        colorChange.value = storedColor;
    }

    colorChange.addEventListener("input", (e) => {
        const newColor = e.target.value;
        sections.forEach(section => {
            section.style.backgroundColor = newColor;
        });
        localStorage.setItem("sectionColor", newColor);
    });
});

const button = document.getElementById("toggleBtn");
const paragraph = document.getElementById("text");

button.addEventListener("click", () => {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
        button.textContent = "Hide Paragraph";
    } else {
        paragraph.style.display = "none";
        button.textContent = "Show Paragraph";
    }
});


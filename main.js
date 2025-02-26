document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".shawerma").forEach(item => {
        item.addEventListener("click", () => {
            alert(`Вы выбрали: ${item.querySelector("h2").textContent}`);
        });
    });
});

function showPage(page) {
    document.querySelectorAll(".page").forEach((div) => {
        div.style.display = "none";
    });

    // Change display none to block (current page)
    document.querySelector(`#${page}`).style.display = "block";


    // Change background current color
    document.querySelector(`.${page}`).style.background = "#1b9bff";
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach((a) => {
        a.onclick = function () {
            showPage(this.dataset.page);
        };
    });
});

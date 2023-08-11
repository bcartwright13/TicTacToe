const cells = document.querySelectorAll(".cell");

for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
        if (!cells[i].innerText) {
            cells[i].innerText = "X";
        }
    };
}
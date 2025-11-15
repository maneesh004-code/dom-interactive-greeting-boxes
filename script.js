// Change greeting on button click
document.getElementById("btn").addEventListener("click", function () {
    let name = document.getElementById("nameInput").value;

    if (name.trim() !== "") {
        document.getElementById("greet").innerText = "Hello, " + name;
    }
});

// Fill box color on click
document.getElementById("red").addEventListener("click", function () {
    this.style.backgroundColor = "red";
});

document.getElementById("blue").addEventListener("click", function () {
    this.style.backgroundColor = "blue";
});

document.getElementById("green").addEventListener("click", function () {
    this.style.backgroundColor = "green";
});

document.getElementById("yellow").addEventListener("click", function () {
    this.style.backgroundColor = "yellow";
});

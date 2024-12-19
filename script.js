const display = document.getElementById("display");

function write_value(value) {
    if (value == "AC") {
        display.textContent = "0";
    } else if (value == "C1") {
        display.textContent = display.textContent.slice(0, -1)
    } else if (value == "=") {
        display.textContent = eval(display.textContent)
    } else {
        if (display.textContent == "0") {
            display.textContent = value;
        } else {
        display.textContent += value;
    }
}
}

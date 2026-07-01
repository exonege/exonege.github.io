var activePort = "personal";
var lastPortButton = document.querySelector("#p_personal");

function changePort(port, button) {
    if (lastPortButton == button){
        return 0;
    }

    rotate(lastPortButton, 10);
    rotate(button, -10);

    lastPortButton.classList.remove("active");
    button.classList.add("active");
    lastPortButton = button;

    activePort = port;

}

function rotate(button, amm) {
    button.style.transform = "rotate("+amm+"deg)";

    setTimeout(() => {
        button.style.transform = "rotate(0deg)";
    }, 50);
}

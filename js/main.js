// untuk input nama dan di letakkan pada welcome message
document.addEventListener("DOMContentLoaded", function () {
    let name = prompt("Silakan masukkan nama Anda:");

    if (name) {
        //memasukkan nama ke welcome message
        let welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.textContent = 'Hi ' + name + ', Welcome to';
    }
});

//Scroll effect
function scrollToSection(event) {
    event.preventDefault();

    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
}
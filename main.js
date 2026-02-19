var hour = new Date().getHours();
var greetingText = document.getElementById("greeting");

if (hour < 12) {
    greetingText.textContent = "Good Morning! ☀️ Welcome to my page!";
} else if (hour < 18) {
    greetingText.textContent = "Good Afternoon! 🌤️ Welcome to my page!";
} else {
    greetingText.textContent = "Good Evening! 🌙 Welcome to my page!";
}

function showMessage() {
    var text = document.getElementById("surpriseText");
    var messages = [
        "You can be a software engineer too! Never stop dreaming! 🌟🚀",
        "Coding is like a superpower! You can build anything! 💪✨",
        "Every expert was once a beginner! Keep learning! 📚🎯",
        "The future belongs to those who dream big! 🌈🦄",
        "Believe in yourself and start coding today! 💻🔥"
    ];

    var colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#9B59B6"];
    var random = Math.floor(Math.random() * messages.length);
    text.textContent = messages[random];
    text.style.color = colors[random];
}

function greetByName() {
    var name = document.getElementById("nameInput").value;
    var display = document.getElementById("nameGreeting");

    if (name === "") {
        display.textContent = "Oops! Please type your name first! 😄";
    } else {
        display.textContent = "Hi " + name + "! 👋 You can be anything you dream of! 🌟";
    }
}

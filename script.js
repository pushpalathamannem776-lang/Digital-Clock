let is24Hour = false;

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    let period = "";

    if (!is24Hour) {
        period = hours >= 12 ? " PM" : " AM";
        hours = hours % 12;

        if (hours === 0) {
            hours = 12;
        }
    }

    hours = String(hours).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}${period}`;

    const date = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    document.getElementById("date").textContent = date;
}

function toggleFormat() {
    is24Hour = !is24Hour;
    updateClock();
}

updateClock();

setInterval(updateClock, 1000);
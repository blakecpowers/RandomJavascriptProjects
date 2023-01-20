const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function updateClock() {
    const currentDate = new Date();
    
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const hourDegree = (hour / 12) * 360;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    const minuteDegree = (minute / 60) * 360;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    const secondDegree = (second / 60) * 360;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

}

setInterval(updateClock, 1000);


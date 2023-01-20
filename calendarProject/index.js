const currentMonth = document.querySelector(".container .calendar .month .date h1");
const fullDate = document.querySelector(".date p");
const daysDiv = document.querySelector(".days");

const monthInx = new Date().getMonth();
const lastDate = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay();
console.log(firstDay);

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
currentMonth.innerText = months[monthInx];
fullDate.innerText = new Date().toDateString();

let days = "";

for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`
}

for (let i=1; i<=lastDate; i++) {
    if (i === new Date().getDate()) {
        console.log("HELLO???")
        days += `<div class="today">${i}</div>`;
    } else {
    days += `<div>${i}</div>`;
    }
}

daysDiv.innerHTML = days;

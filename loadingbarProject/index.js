const counter = document.querySelector(".counter");
const bar = document.querySelector(".loading-bar-front");

let idx = 0;


updateNum();

function updateNum() {
    counter.innerText = idx + "%";
    bar.style.width = idx + "%";
    idx++;

    if (idx < 101) {
        setTimeout(updateNum, 20);
    }

}
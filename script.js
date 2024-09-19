const btnEl = document.querySelector("button");
const imgEl = document.querySelector("img");

function getRandom6(){
    return Math.floor(Math.random() * 6) + 1;
}

function getRandomUrl() {
    const numWords = ["one", "two", "three", "four", "five", "six"];
    const rn = getRandom6() -1;
    console.log(numWords[rn]);

    const url = `assets/dice-${numWords[rn]}.png`;
    return url;
}

// imgEl.src = getRandomUrl();

btnEl.addEventListener("click", function(){
    console.log("hi");
    imgEl.src = getRandomUrl();

});
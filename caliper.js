let M = document.getElementById("cart");
let c1 = document.getElementById("caliper1");
let c2 = document.getElementById("caliper2");
let c3 = document.getElementById("caliper3");
let c4 = document.getElementById("caliper4");
let c5 = document.getElementById("caliper5");
let c6 = document.getElementById("caliper6");
let c7 = document.getElementById("caliper7");
let c8 = document.getElementById("caliper8");
let c9 = document.getElementById("caliper9");
let c10 = document.getElementById("caliper10");
let c11 = document.getElementById("caliper11");
let c12 = document.getElementById("caliper12");

let p = document.getElementById("count");
let arr = [];
let count = 0;

M.addEventListener("click", function () {

});

function S() {
    p.innerHTML = count;
}

function l(item, price) {
    count++;
    S();
    arr.push({ item, price });
    console.log(arr);

    const li = document.createElement("li");
    li.textContent = `${item} - $${price.toFixed(2)}`;
    M.appendChild(li);
}


c1.onclick = function () {
    l("HondaHornet", 5723);
};


c2.onclick = function () {
    l("CBR250", 1234);
};

c3.onclick = function () {
    l("RTR200", 5800)
}


c4.onclick = function () {
    l("HeroGlamour", 3723)
}


c5.onclick = function () {
    l("Hondashine125", 4423)
}

c6.onclick = function () {
    l("Pulsar150", 2323)
}

c7.onclick = function () {
    l("Duke200", 6800)
}

c8.onclick = function () {
    l("RE350", 6000)
}

c9.onclick = function () {
    l("Vespa", 2473)
}


c10.onclick = function () {
    l("Aprilla160", 5000)
}

c11.onclick = function () {
    l("TVSphonix", 5400)
}

c12.onclick = function () {
    l("HondaGrazia", 5300)
}
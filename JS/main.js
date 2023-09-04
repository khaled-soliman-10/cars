let porshe = document.querySelector(".future .details .text:nth-of-type(1)");
let mercedes = document.querySelector(".future .details .text:nth-of-type(2)");
let ferrari = document.querySelector(".future .details .text:nth-of-type(3)");
let bmw = document.querySelector(".future .details .text:nth-of-type(4)");
let text = document.querySelectorAll(".future .details .text");

let img = document.querySelector(".future .photo img");
let hOne = document.querySelector(".future .photo h1");
let hSix = document.querySelector(".future .photo h6");
let p = document.querySelector(".future .photo p");

porshe.onclick = ()=> {
    img.src ="Imgs/porshe.jpg" 
    text.forEach( e => {
        e.classList.remove("shadow")
    });
    porshe.classList.add("shadow")
    hOne.textContent = "porshe"
    hSix.textContent = "German company specializing in the manufacture of high-performance luxury sports cars. The company was established in 1931 by Austrian engineer Ferdinand Porsche, who designed the first Volkswagen cars."
    p.textContent = "In 2001, Porsche sports cars were ranked as the most prestigious car by the Luxury Institute in New York, through a survey of more than 500 families with an annual income of at least $200,000."
}

mercedes.onclick = ()=> {
    img.src ="Imgs/mercedes.jpg" 
    text.forEach( e => {
        e.classList.remove("shadow")
    });
    mercedes.classList.add("shadow")
    hOne.textContent = "mercedes"
    hSix.textContent = "Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926. Mercedes-Benz AG (a Mercedes-Benz Group subsidiary established in 2019) is headquartered in Stuttgart"
    p.textContent = "The brand's origins lie in Daimler-Motoren-Gesellschaft: 1901 Mercedes and Carl Benz's 1886 Benz Patent- Motorwagen, which is widely regarded as the first internal combustion engine in a self-propelled automobile."
}

ferrari.onclick = ()=> {
    img.src ="Imgs/ferari.jpg" 
    text.forEach( e => {
        e.classList.remove("shadow")
    });
    ferrari.classList.add("shadow")
    hOne.textContent = "ferrari"
    hSix.textContent = "The history of this company began with a man named (Enzo Ferrari), who loved cars and racing a lot since his childhood. One day, his father took his older brother (Alfredo) to a car race in the city (Bologna), and he wanted (Enzo)"
    p.textContent = "The name of the car is derived from it: 4.5-liter V8 engine, which is the most powerful road-licensed V8 engine with a power of up to 570 horsepower. The new engine is not only more powerful and more flexible."
}

bmw.onclick = ()=> {
    img.src ="Imgs/bmw.jpg" 
    text.forEach( e => {
        e.classList.remove("shadow")
    });
    bmw.classList.add("shadow")
    hOne.textContent = "BMW"
    hSix.textContent = "BMW has a long history in the automobile industry, inventing all that is new and advanced in modern technology, high-quality structures with superior safety standards, and diverse engines in terms of performance, power and acceleration."
    p.textContent = "BMW follows the sequential system in versions such as the sports car (Z4S) open-top with a one-door design, a very powerful 6-cylinder engine with a turbocharger, the total engine power is 255 horsepower,"
}

const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");



let ms1 = 0;
let ms10 = 0;
let sec1 = 0;
let sec10 = 0;

secondTens.textContent = sec10;
secondOnes.textContent = sec1;
msHundreds.textContent = ms10;
msTens.textContent= ms1;


// creating button tag and adding it to body
const button = document.createElement("button");
button.classList.add('btn-1');
button.textContent = "Start";

const body = document.querySelector('body');
body.appendChild(button);

// Adding style to body
body.style.display = "flex";
body.style.flexDirection = "column";


// Adding close button
const closeButton = document.createElement("button");
closeButton.classList.add('btn-1');
closeButton.textContent = "Stop";
body.appendChild(closeButton);

const buttons = document.querySelectorAll(".btn-1");
console.log(buttons);
// Adding style to all buttons
buttons.forEach(item => {
    item.style.display = "flex";
    item.style.flexDirection = "row";
    item.style.justifyContent = "space-between";
    item.style.padding = "20px 40px";
    item.style.margin = "10px";
    item.style.backgroundColor = "grey";
    item.style.borderRadius = "20px";
});


// Evenlistener

button.addEventListener("click", item => {
    console.log("Hey");
    ms10+=1;
    setTimeout(function (){
        MilliSecond();
        firstSecond();
        tenSecond();

    },1000);


    
});

function MilliSecond(){
    if(ms10 === 9){
       ms10 = 0;
    }else{
        ms1 +=1 ;
    }
}

function firstSecond(){
    if(ms1 === 9){
        ms1 = 0;
    }else{
        sec10 +=1;
    }
}

function tenSecond(){
    if(sec10 === 9){
        sec10 = 0;
    }else{
        sec1 +=1;
    }
}






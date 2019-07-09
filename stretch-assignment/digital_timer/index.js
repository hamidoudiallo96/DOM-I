const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

secondTens.style.color = "red";
secondOnes.style.color = "red";
msHundreds.style.color = "red";
msTens.style.color = "red";



let ms10 = 0;
let ms100 = 0;
let sec1 = 0;
let sec10 = 0;

// secondTens.textContent = sec10;
// secondOnes.textContent = sec1;
// msHundreds.textContent = ms100;
// msTens.textContent= ms1;


// creating button tag and adding it to body
const button = document.createElement("button");
button.classList.add('btn-1');
button.textContent = "Start";

const body = document.querySelector('body');
body.style.backgroundColor = "blue";
body.appendChild(button);

// Adding style to body
body.style.display = "flex";
body.style.flexDirection = "column";


// Adding close button
const closeButton = document.createElement("button");
closeButton.classList.add('btn-1');
closeButton.classList.add('stopper');
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

button.addEventListener("click", function() {
    // testing
    console.log("Hey");
    
    // Start Button event listener
    let timeWatch = setInterval(function (){
        // console.log("Sean");
        // console.log(timeWatch);
        ms10+=1;

        MilliSecond();
        firstSecond();
        tenSecond();
        

    },500);

    let stopButton = document.querySelector(".stopper");

    // Stop Button event listener
    stopButton.addEventListener("click", function(){
        // testing
        console.log("Stopped");
        clearInterval(timeWatch);

    
        
    
    });


    

   

    
});

// timer increments
function MilliSecond(){
    if(ms10 === 6){
        ms10 = 0;
        ms100 +=1 ;
    }
    console.log(ms10);
    msTens.textContent= ms10;
};

function firstSecond(){
    if(ms100 === 6){
        ms100 = 0;
        sec1 +=1;
    }
    console.log(ms100);
    msHundreds.textContent= ms100;
}

function tenSecond(){
    if(sec1 === 6){
        sec1 = 0;
        sec10 +=1;
    }
    console.log(sec1);
    secondOnes.textContent = sec1;
}




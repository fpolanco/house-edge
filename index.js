//Locate Id and create variables
// create variable to manipulate cointer decrease
let decreaseBtn = document.getElementById("decrease_button");
// create variable to manipulate counter increase
let increaseBtn = document.getElementById("increase_button");
// create varioable for counter
let counter = document.getElementById("counter");
// create variable to keep track of count in counter value of coun
let count = 0;

//AddEventListeners
//console.log everything first then continue implementing function
//Event listener to decrease counter
decreaseBtn.addEventListener('click', ()=>{
    //console.log('decrease');
    //value of count decrease by 1
    count --;
    // show decrease in counter
    counter.innerHTML = count;
    //add counterStyle function for # to change color if less than 0
    counterStyle();
})

//Event listener to increase counter
increaseBtn.addEventListener('click', ()=>{
    //console.log('increased');
    count ++;
    // show increase in counter
    counter.innerHTML = count;
    //add counterStyle function for # to change color if greater than 0
    counterStyle();
})

//Adding color change based on count increase/decrease
// function counterStyle(){
//     // if count is negative add classList of "negative"
//     if (count < 0){
//         counter.classList.add("negative");
//     }
//     // if count is negative add classList of "positive"
//     else if (count > 0){
//         counter.classList.add("positive");
//     }
//     // if count is not negative or positive dont add class at all
//     else{
//         counter.classList.remove("negative");
//         counter.classList.remove("positive");
//     }
//     }
// add .negative and .positive class to CSS
// add animation to number color change
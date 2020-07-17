
let button = document.querySelector("#button")
let minus = document.querySelector(".minus");
let divide = document.querySelector(".divide");
let equal = document.querySelector(".equal");
let add = document.querySelector(".add")
let reset = document.querySelector(".reset")
let times = document.querySelector(".times");
let result = document.querySelector(".display")
let display = document.querySelector(".result")
display.innerHTML = 0;


//listen to the click 
button.addEventListener("click", function(e) {
    let {target} = e;
    //check that the button click is a button in the div
    if(!target.matches("[number]")) {
        if(target.classList.contains("number")){
            
            numbertype(target)
        }
        if(target.classList.contains("decimal")){
            decimal(target)
            
        }
        if(target.classList.contains("opera")){
            
            opera(target)
        }
        if(target.classList.contains("equal")){
           
            equality();
        }
        if(target.classList.contains("reset")){
    
            clear()
        }
    }
})


const numbertype = (x) => {
    //overwrite the 0 in the display.
    if(display.innerHTML ==0) {
        display.innerHTML = x.value;
    } else {
        // join to the number 
        display.innerHTML += x.value
    }
}

//only one decimal is added in one entry
const decimal = (y) => {
    if(display.classList.contains("deci")) {
        return;
    } else {
        display.innerHTML += y.value;
        display.classList.add("deci")
    }
}

const opera = (z) => {
    //saves the first value using the dataset
    const firstNum = display.innerHTML;
    display.dataset.myNum = firstNum;
    //ensures only one operator is added per time
    if (display.classList.contains("operatorExist")) {
        return;
    } else {
        //a decimal can only be added again after the operator is clicked
        // adds a operator indicator
        display.classList.remove("deci");
        display.classList.add("operatorExist")
        //adds an indicator class for any of the operator
        if(z.classList.contains("times")) {
            display.innerHTML += z.value;
            display.classList.add("t")
        }
        if(z.classList.contains("divide")) {
            display.innerHTML += z.value;
            display.classList.add("d")
        }
        if(z.classList.contains("minus")) {
            display.innerHTML += z.value;
            display.classList.add("m")
        }
        if(z.classList.contains("add")) {
            display.innerHTML += z.value;
            display.classList.add("a")
        }
    }
    //runs the second number after an operator has been clicked
    secondNumber();
    
}

//checks for the equality
const equality = () => {
    let first = display.dataset.myNum;
    console.log(first)
    display.classList.remove("operatorExist");
    if(display.classList.contains("t")) {
        result.innerHTML += display.innerHTML;
        display.innerHTML *= first
        display.classList.remove("t")
    }
    if(display.classList.contains("m")) {
        result.innerHTML += display.innerHTML;
        display.innerHTML = (first - display.innerHTML)
        display.classList.remove("m")
    }
    if(display.classList.contains("d")) {
        result.innerHTML += display.innerHTML;
        display.innerHTML = (first/display.innerHTML)
        display.classList.remove("d")
    }
    if(display.classList.contains("a")) {
        result.innerHTML += display.innerHTML;
        display.innerHTML += first
        display.classList.remove("a")
    }
}

const clear = () => {
    display.innerHTML = 0;
    result.innerHTML = " ";
    display.classList.remove("operatorExist");
}

const secondNumber = () => {
    console.log("i love you")
    result.innerHTML = display.innerHTML
    display.innerHTML = 0;
}


//NEXT TO DO, IMPROVE AND ADD MORE FEATURES
//

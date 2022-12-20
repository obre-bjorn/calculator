let buttons = [...document.getElementsByClassName('nums')]
let clear = document.getElementById("clear")
let display = document.getElementById('display');
let equals = document.getElementById("equals");


// Display changing on number press
function writeNumber(e){
    let value = e.target.textContent;
    let operators = {
        'x': '*',
        '÷': '/',
        '%': '/100'
    }
    if(value in operators){
        display.textContent+= operators[value]
    }else{
        display.textContent+= value
    }
}
buttons.forEach((btn)=>{
    btn.addEventListener('click',writeNumber);
})


// Clear Calculator Display.
clear.addEventListener('click',function(e){
    display.textContent = "";
})


// Equals performs calculation and displays result
equals.addEventListener('click',function(e){
    try {
        let result = eval(display.textContent);
        display.textContent = result
    } catch (err) {
        display.textContent = "Invalid Input";
    }
})



console.log(eval(display.textContent));
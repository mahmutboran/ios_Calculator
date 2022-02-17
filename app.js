let clear = document.getElementById("clear");
let plusminus = document.getElementById("plusminus");
let modulüs = document.getElementById("modulüs");
let divice = document.getElementById("divice");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let four = document.getElementById("four");
let multiply = document.getElementById("multiply");
let five = document.getElementById("five");
let sevn = document.getElementById("seven");
let minus = document.getElementById("minus");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let plus = document.getElementById("plus");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
let equal = document.getElementById("equal");
let result = document.getElementById("result");
let copyresult = document.getElementById("copyresult");


let content = document.getElementsByClassName("content")
let myArray = []

Array.from(content).forEach(e => {
    e.addEventListener("click", () => {
        result.innerHTML += e.value
        myArray.push(e.value)
    })
    
});


equal.addEventListener("click", () => {

    let results;
    if (myArray.includes("x")) {
        let num1 = Number(myArray.slice(0, myArray.indexOf("x")).join(""))
        let num2 = Number(myArray.slice(myArray.indexOf("x") + 1).join(""))
        copyresult.innerHTML = (num1 * num2)
        results = (num1 * num2)
    } else if (myArray.includes("÷")) {
        let num1 = Number(myArray.slice(0, myArray.indexOf("÷")).join(""))
        let num2 = Number(myArray.slice(myArray.indexOf("÷") + 1).join(""))
        copyresult.innerHTML = (num1 / num2).toFixed(8)
        results = (num1 / num2).toFixed(8)
    } else if (myArray.includes("-")) {
        let num1 = Number(myArray.slice(0, myArray.indexOf("-")).join(""))
        let num2 = Number(myArray.slice(myArray.indexOf("-") + 1).join(""))
        copyresult.innerHTML = num1 - num2
        results = (num1 - num2)
    } else if (myArray.includes("+")) {
        let num1 = Number(myArray.slice(0, myArray.indexOf("+")).join(""))
        let num2 = Number(myArray.slice(myArray.indexOf("+") + 1).join(""))
        copyresult.innerHTML = num1 + num2
        results = (num1 + num2)
    }
    result.innerHTML = ""
    myArray = [results]

    
})


modulüs.addEventListener(("click"), () => {
    let num1 = Number(myArray.slice(0, myArray.indexOf("%")).join(""))
    results=(num1 / 100).toFixed(2)
    myArray = [results]
    copyresult.innerHTML = results
    result.innerHTML = ""
})
clear.addEventListener("click", () => {
    myArray = []
    result.innerHTML = ""
    copyresult.innerHTML = ""
})


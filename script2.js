let inputcm = document.getElementById("cm");
let inputkg = document.getElementById("kg");
let history = document.getElementById("history");
let sub = document.getElementById("btn");
let min = document.getElementById("mince");
let moy = document.getElementById("moyen");
let lar = document.getElementById("large");

let obj = {};

if (localStorage.getItem("Data")) {
    let localStorageData = JSON.parse(localStorage.getItem("Data"));
    obj = { ...localStorageData };

    for (let n in obj) {
        history.innerHTML += `${n} = ${obj[n] }` 
    }
}

sub.addEventListener("click", function () {
    if (isNaN(inputcm.value)  isNaN(inputkg.value)  (!min.checked && !moy.checked && !lar.checked)) {
        alert("Please enter valid values for height, weight, and select a morphology.");
        return;
    }

    let calculatedWeight;
    if (min.checked) {
        calculatedWeight = (inputcm.value - 100 + inputkg.value / 10) * 0.9 * 0.9;
        document.getElementById("par").innerHTML = "Votre poids idéal";
    } else if (moy.checked) {
        calculatedWeight = (inputcm.value - 100 + inputkg.value / 10) * 0.9;
        document.getElementById("par").innerHTML = "Votre poids limite";
    } else {
        calculatedWeight = (inputcm.value - 100 + inputkg.value / 10) * 0.9 * 1.1;
        document.getElementById("par").innerHTML = "Votre poids large";
    }

    result.innerHTML = ${calculatedWeight.toFixed(2)} kg;

    obj[${inputcm.value} - ${inputkg.value}] = result.innerHTML;
    let js = JSON.stringify(obj);
    localStorage.setItem("Data", js);
    history.innerHTML = "";
    for (let n in obj) {
        history.innerHTML += `${n} = ${obj[n] }` 

    }
});

// ****************** 1 *********************

// function result() {
//     let inputNumber = document.getElementById('inputNumber'); 
//     let numSelect = document.getElementById('select'); 
//     let result = document.getElementById('result'); 
//     let calculationResult = parseInt(inputNumber.value) * parseInt(numSelect.value);

//     result.innerHTML = "Result: " + inputNumber.value + " * " + numSelect.value + " = " + calculationResult;

//     let resultText = "Result: " + inputNumber.value + " * " + numSelect.value + " = " + calculationResult;

//     document.getElementById("history").innerHTML += "<br>" + resultText;
//     localStorage.setItem("history", document.getElementById("history").innerHTML);
// }

// window.onload = function () {
//     let savedHistory = localStorage.getItem("history");
//     if (savedHistory) {
//         document.getElementById("history").innerHTML = savedHistory;
//     }
// };

// function clearHistory() {
//     document.getElementById("history").innerHTML = "";
//     localStorage.removeItem("calculationHistory");
// }

// ****************** 2 *********************



let input = document.getElementById("inputNumber"); 
let numSelect = document.getElementById("select");
let result = document.getElementById("result");
let history = document.getElementById("history"); 
let btnResult = document.getElementById("btnresult"); 

let obj={}

if (localStorage.length>0) {
    let localStorageData = JSON.parse(localStorage.getItem("data"))
    obj={...localStorageData}

    for (let n in obj) {
        history.innerHTML += `${n} = ${obj[n] } <button style="box-shadow: 1px 1px 0px black;border-radius:7px;border:1px solid black;margin-left:20px;" id="deleteline" onclick="deleteLine()">Delete</button><br>` 
    }
}

btnResult.addEventListener("click", () => {
    if (input.value !== "" && numSelect.value !== "") {
        let r =  +input.value * +numSelect.value
        result.innerHTML = "Result: " + +input.value + " * " + +numSelect.value + " = " + r
        obj[`${input.value} * ${numSelect.value}`]=r
        localStorage.setItem("data", JSON.stringify(obj))
        history.innerHTML += `${input.value} * ${numSelect.value} = ${r} <button style="box-shadow: 1px 1px 0px black;border-radius:7px;border:1px solid black;margin-left:20px;" id="deleteline" onclick="deleteLine()">Delete</button><br>`
        
    } else {
        alert("please enter a number")
    }
})

function deleteLine(key) {
    delete obj[key];
    localStorage.setItem("data", JSON.stringify(obj));
    refreshHistory();
}

function refreshHistory() {
    history.innerHTML = "";
    for (let n in obj) {
        history.innerHTML += `<div>${n} = ${obj[n]} <button style="position;box-shadow: 1px 1px 0px black;border-radius:7px;border:1px solid black;margin-left:20px;" onclick="deleteLine('${n}')">Delete</button></div>`;
    }
}

function clearSession() {
    document.getElementById("history").innerHTML = "";
    localStorage.removeItem("history");
}
function clearData() {
    document.getElementById("history").innerHTML = "";
    localStorage.removeItem("data");
}


// ****************** 2 *********************

// let input = document.getElementById("inputNumber");
// let numSelect = document.getElementById("select");
// let result = document.getElementById("result");
// let history = document.getElementById("history");
// let btnResult = document.getElementById("btnresult");

// let obj = {};

// if (localStorage.length > 0) {
//     let localStorageData = JSON.parse(localStorage.getItem("data"));
//     obj = { ...localStorageData };

//     for (let n in obj) {
//         history.innerHTML += `<div>${n} = ${obj[n]} <button style="box-shadow: 1px 1px 0px black;border-radius:7px;border:1px solid black;margin-left:20px;" onclick="deleteLine('${n}')">Delete</button></div>`;
//     }
// }

// btnResult.addEventListener("click", () => {
//     if (input.value !== "" && numSelect.value !== "") {
//         let r = +input.value * +numSelect.value;
//         result.innerHTML = "Result: " + r;
//         obj[`${input.value} * ${numSelect.value}`] = r;
//         localStorage.setItem("data", JSON.stringify(obj));
//         history.innerHTML += `<div>${input.value} * ${numSelect.value} = ${r} <button style="box-shadow: 1px 1px 0px black;border-radius:7px;border:1px solid black;margin-left:20px;" onclick="deleteLine('${input.value} * ${numSelect.value}')">Delete</button></div>`;
//     } else {
//         alert("please enter a number");
//     }
// });

// function deleteLine(key) {
//     delete obj[key];
//     localStorage.setItem("history", JSON.stringify(obj));
//     refreshHistory();
// }

// function refreshHistory() {
//     history.innerHTML = "";
//     for (let n in obj) {
//         history.innerHTML += `<div>${n} = ${obj[n]} <button style="box-shadow: 1px 1px 0px black;border-radius:7px;border:1px solid black;margin-left:20px;" onclick="deleteLine('${n}')">Delete</button></div>`;
//     }
// }

// function clearSession() {
//     document.getElementById("history").innerHTML = "";
//     localStorage.removeItem("history");
// }

// function clearData() {
//     document.getElementById("history").innerHTML = "";
//     localStorage.removeItem("data");
// }


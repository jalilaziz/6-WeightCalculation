// ****************** 1 *********************

// function result() {
//     let inputHeight = document.getElementById("inputheight"); 
//     let inputAge = document.getElementById("inputage"); 
//     let result = document.getElementById('result'); 
//     let calculationResult = (parseInt(inputHeight.value) - 100 + parseInt(inputAge.value)/10) * 0.9;

//     result.innerHTML = "Result: " + calculationResult + " Kg is your ideal weight";

//     let resultText = "Result: " + calculationResult + " Kg is your ideal weight";

//     document.getElementById("history").innerHTML += "<br>" + resultText;
//     localStorage.setItem("history", document.getElementById("history").innerHTML);
// }

// window.onload = function () {
//     let savedHistory = localStorage.getItem("history");
//     if (savedHistory) {
//         document.getElementById("history").innerHTML = savedHistory;
//     }
// };

// function clearSession() {
//     document.getElementById("history").innerHTML = "";
//     localStorage.removeItem("history");
// }

// function clearData() {
//     document.getElementById("data").innerHTML = "";
//     localStorage.removeItem("data");
// }

// ****************** 2 *********************

let inputHeight = document.getElementById("inputheight");
let inputAge = document.getElementById("inputage");
let result = document.getElementById("result");
let history = document.getElementById("history");
let btnResult = document.getElementById("btnresult");
let min = document.getElementById("mince");
let moy = document.getElementById("moyen");
let lar = document.getElementById("large");

let obj = {}

if (localStorage.length > 0) {
    let localStorageData = JSON.parse(localStorage.getItem("data"))
    obj = { ...localStorageData }

    for (let n in obj) {
        history.innerHTML += `<div>${n} = ${obj[n]} <button style="box-shadow: 1px 1px 0px black;border-radius:7px;border:1px solid black;margin-left:20px;" onclick="deleteLine('${n}')">Delete</button></div>`;
    }
}
//<button style="box-shadow: 1px 1px 0px black;border-radius:7px;border:1px solid black;margin-left:20px;" id="deleteline" onclick="deleteLine()">Delete</button><br>


btnResult.addEventListener("click", () => {
    if (isNaN(inputHeight.value) || isNaN(inputAge.value) || (!min.checked && !moy.checked && !lar.checked)) {
        alert("Please enter valid values for height and weight.");
        return;
    }

    let calculatedWeight;
    if (min.checked) {
        calculatedWeight = (inputHeight.value - 100 + inputAge.value / 10) * 0.9 * 0.9;
        document.getElementById("result").innerHTML += calculatedWeight.toPrecision(3) + " Kg Votre poids idéal<br>";

        let r = calculatedWeight.toPrecision(3) + " Kg Votre poids idéal";
        result.innerHTML = r;
        obj[`${inputHeight.value} Kg et ${inputAge.value} ans`] = r;
        localStorage.setItem("data", JSON.stringify(obj));
        history.innerHTML += `<div>${inputHeight.value} Kg et ${inputAge.value} ans = ${r} <button style="box-shadow: 1px 1px 0px black;border-radius:7px;border:1px solid black;margin-left:20px;" onclick="deleteLine('${r}')">Delete</button></div>`;

    } if (moy.checked) {
        calculatedWeight = (inputHeight.value - 100 + inputAge.value / 10) * 0.9;
        document.getElementById("result").innerHTML += calculatedWeight.toPrecision(3) + " Kg Votre poids limite<br>";

        let r = calculatedWeight.toPrecision(3) + " Kg Votre poids limite";
        result.innerHTML = r;
        obj[`${inputHeight.value} Kg et ${inputAge.value} ans`] = r;
        localStorage.setItem("data", JSON.stringify(obj));
        history.innerHTML += `<div>${inputHeight.value} Kg et ${inputAge.value} ans = ${r} <button style="box-shadow: 1px 1px 0px black;border-radius:7px;border:1px solid black;margin-left:20px;" onclick="deleteLine('${r}')">Delete</button></div>`;

    } if (lar.checked) {
        calculatedWeight = (inputHeight.value - 100 + inputAge.value / 10) * 0.9 * 1.1;
        document.getElementById("result").innerHTML += calculatedWeight.toPrecision(3) + " Kg Votre poids large<br>";

        let r = calculatedWeight.toPrecision(3) + " Kg Votre poids large";
        result.innerHTML = r;
        obj[`${inputHeight.value} Kg et ${inputAge.value} ans`] = r;
        localStorage.setItem("data", JSON.stringify(obj));
        history.innerHTML += `<div>${inputHeight.value} Kg et ${inputAge.value} ans = ${r} <button style="box-shadow: 1px 1px 0px black;border-radius:7px;border:1px solid black;margin-left:20px;" onclick="deleteLine('${r}')">Delete</button></div>`;
    }

    // let r = calculatedWeight;
    // result.innerHTML = calculatedWeight;
    // obj[`${inputHeight.value} Kg and ${inputAge.value} Yo`] = r;
    // localStorage.setItem("data", JSON.stringify(obj));
    // history.innerHTML += `<div style="width=fit-content;">${inputHeight.value} Kg and ${inputAge.value} = ${calculatedWeight} <button style="box-shadow: 1px 1px 0px black;border-radius:7px;border:1px solid black;margin-left:20px;" onclick="deleteLine('${inputHeight.value} KK and ${inputAge.value} Y')">Delete</button></div>`;

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


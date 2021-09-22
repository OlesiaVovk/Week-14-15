//функция которая меняет фон страницы
function changePageColor() {
    let color = document.getElementById("pageColor").value;
    document.getElementById("colorarea").style.backgroundColor = color;
}


//функция которая меняет фон div-ов по клику на них
function colorIt(sender) {
    sender.style.backgroundColor = "lightblue";
}


//калькулятор
function getAdditionResult() {
    let a = document.getElementById("calc1").value;
    let b = document.getElementById("calc2").value;

    document.getElementById("errorMessage").innerHTML = "";

    if (a === "" || b === "" || isNaN(a) || isNaN(b)) {
        document.getElementById("result").value = "";
        document.getElementById("errorMessage").innerHTML += "Ввведите цифру!";
    } else {
        let res = Number(a) + Number(b);
        document.getElementById("result").value = res;
    }
}


function getSubstractionResult() {
    let a = document.getElementById("calc1").value;
    let b = document.getElementById("calc2").value;

    document.getElementById("errorMessage").innerHTML = "";

    if (a === "" || b === "" || isNaN(a) || isNaN(b)) {
        document.getElementById("result").value = "";
        document.getElementById("errorMessage").innerHTML += "Ввведите цифру!";
    } else {
        let res = Number(a) - Number(b);
        document.getElementById("result").value = res;
    }
}


function getMultiplicationResult() {
    let a = document.getElementById("calc1").value;
    let b = document.getElementById("calc2").value;

    document.getElementById("errorMessage").innerHTML = "";

    if (a === "" || b === "" || isNaN(a) || isNaN(b)) {
        document.getElementById("result").value = "";
        document.getElementById("errorMessage").innerHTML += "Ввведите цифру!";
    } else {
        let res = Number(a) * Number(b);
    document.getElementById("result").value = res;
    }
}


function getDivisionResult() {
    let a = document.getElementById("calc1").value;
    let b = document.getElementById("calc2").value;

    document.getElementById("errorMessage").innerHTML = "";

    if (a === "" || b === "" || isNaN(a) || isNaN(b)) {
        document.getElementById("result").value = "";
        document.getElementById("errorMessage").innerHTML += "Ввведите цифру!";
    } else if (b == 0) {
        document.getElementById("result").value = "";
        document.getElementById("errorMessage").innerHTML += "На ноль делить нельзя!";
    } else {
        let res = Number(a) / Number(b);
        document.getElementById("result").value = res;
    }

}







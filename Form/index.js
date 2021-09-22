function check() {
    let name = document.getElementById("userName");
    let surname = document.getElementById("userSurname");
    let login = document.getElementById("userLogin");
    let pass = document.getElementById("password");
    let passcopy = document.getElementById("passwordCopy");
    let phone = document.getElementById("phoneNumber");
    let isErrors = false;

    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("passwordLength").innerHTML = "";
    document.getElementById("isPasswordCopy").innerHTML = "";

    if (name.value === "" || surname.value === "" || login.value === "" ||
        pass.value === "" || phone.value === "" || passcopy.value === "") {
        isErrors = true;
        document.getElementById("errorMessage").innerHTML += "Заполните поля!";
    }
    if (pass.value.length < 4) {
        isErrors = true;
        document.getElementById("passwordLength").innerHTML += "Ненадежный пароль!";
    }
    if (pass.value !== passcopy.value) {
        isErrors = true;
        document.getElementById("isPasswordCopy").innerHTML += "Пароли не совпадают!";
    }
    if (phone.value.length < 11) {
        isErrors = true;
        document.getElementById("errorPhoneNum").innerHTML += "Недостаточно цифр!";
    }
    if (isErrors === false) {
        alert(`Добро пожаловать! ${document.getElementById("userName").value}`);
    }
}

document.getElementById("submit").onclick = check;




/*
function check() {
    let name = document.getElementById("userName");
    let surname = document.getElementById("userSurname");
    let login = document.getElementById("userLogin");
    let pass = document.getElementById("password");
    let passcopy = document.getElementById("passwordCopy");
    let phone = document.getElementById("phoneNumber");

    document.getElementById("errorMessage").innerHTML = "";

    if (name.value === "" || surname.value === "" || login.value === "" ||
        pass.value === "" || phone.value === "" || passcopy.value === "") {
        document.getElementById("errorMessage").innerHTML += "Заполните поля!";
    }
}

document.getElementById("submit").onclick = check;


function check() {
    document.getElementById("errorMessage").innerHTML = "";
    let fields = document.getElementsByTagName("input");
    for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        if (field.value === "") {
            document.getElementById("errorMessage").innerHTML += "Заполните поля!";
            return;
        }
    }
    alert(`Добро пожаловать! ${document.getElementById("userName").value}`);
}

document.getElementById("submit").onclick = check;*/
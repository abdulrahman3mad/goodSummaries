let email = document.getElementById("email")
let password = document.getElementById("password")
let form = document.querySelector("form")
let passwordRegexLength = /[a-zA-Z]{1,}\w{5,}/;
let passwordMessage = document.querySelector(".passwordMessage")
let serverMessage = document.getElementById("serverMessage")


window.addEventListener("load", () => {
})

password.addEventListener("input", (e) => {
    passwordAuth(password.value)
})

function unvalidPasswordStyle(error_txt) {
    password.style.borderColor = "red";
    password.style.borderWidth = "2px";
    passwordMessage.textContent = error_txt;
}

function passwordAuth(passwordInput) {
    if (!passwordRegexLength.test(passwordInput)) {
        unvalidPasswordStyle("Password should be at least six characters starting by an English letter")
        return false;
    }

    else {
        password.style.borderColor = "green";
        passwordMessage.textContent = '';
        return true;
    }
}

form.addEventListener("submit", (event) => {
    if (!passwordAuth(password.value)) {
        event.preventDefault()
    }
})
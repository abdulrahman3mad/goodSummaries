let email = document.getElementById("email")
let password = document.getElementById("password")
let form = document.querySelector("form")
let password_regex_length = /[a-zA-Z]{1,}\w{5,}/;
let password_message = document.querySelector(".passwordMessage")

password.addEventListener("input", (e) => {
    passwordAuth(password.value)
})

function unvalidPasswordStyle(error_txt) {
    password.style.borderColor = "red";
    password.style.borderWidth = "2px";
    password_message.textContent = error_txt;
}

function passwordAuth(passwordInput) {
    if (!password_regex_length.test(passwordInput)) {
        unvalidPasswordStyle("Password should be at least six characters starting by an English letter")
        return false;
    }

    else {
        password.style.borderColor = "green";
        password_message.textContent = '';
        return true;
    }
}

form.addEventListener("submit", (event) => {
    if (!passwordAuth(password.value)) {
        event.preventDefault()
    }
})
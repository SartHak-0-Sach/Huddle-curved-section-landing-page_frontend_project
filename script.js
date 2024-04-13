const form = document.querySelector("#form")
const mail = document.querySelector("#mail")
const errorText = document.querySelector("#error")


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", (e) => {
    let emailValue = mail.value
    if (validateEmail(emailValue)) {
        errorText.style.display = "none";
    }
    else {
        errorText.style.display = "block";
        mail.style.border = "1px solid hsl(0, 6%, 24%)"
        e.preventDefault();
    }
})
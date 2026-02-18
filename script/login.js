document.getElementById("login-btn").addEventListener("click", function () {
    const numberInput = document.getElementById("number-input");
    const contactNumber = numberInput.value;
    console.log(contactNumber)


    const pinInput = document.getElementById("pin-input");
    const pin = pinInput.value;
    console.log(pin)

    if(contactNumber == "01759789659" && pin == "1122"){
        alert("Login Successful");
        window.location.assign("/home.html")
    } else {
        alert("Incorrect Number and Pin");
        return;
    }
})
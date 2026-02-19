document.getElementById("cashout-btn").addEventListener("click",function () {
    const cashoutNumber = getValueFromInput("cashout-number");
    if(cashoutNumber.length != 11){
        return;
    }
    const cashoutAmount = getValueFromInput("cashout-amount");

    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    const newBalance = Number(balance) - Number(cashoutAmount);

    if(newBalance < 0){
        alert("Invalid Amount");
        return
    }
    const cashOutPin = getValueFromInput("pin-cashout");

    if(cashOutPin === "1122"){
        alert("CashOut Successful");
        balanceElement.innerText = newBalance;
    }else {
        alert("Invalid pin");
        return;
    }
})
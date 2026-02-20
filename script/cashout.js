document.getElementById("cashout-btn").addEventListener("click",function () {
    const cashoutNumber = getValueFromInput("cashout-number");
    if(cashoutNumber.length != 11){
        return;
    }
    const cashoutAmount = getValueFromInput("cashout-amount");

    const balanceElement = getBalance();
    const newBalance = balanceElement - Number(cashoutAmount);

    if(newBalance < 0){
        alert("Invalid Amount");
        return
    }
    const cashOutPin = getValueFromInput("pin-cashout");

    if(cashOutPin === "1122"){
        alert("CashOut Successful");
        setBalance(newBalance);

        const history = document.getElementById("history");

        const newElement = document.createElement("div");
        newElement.innerHTML = `
        <div class="p-5 bg-base-100">
          Cashout Successful ${cashoutAmount} TAKA
          ,Agent Number ${cashoutNumber} at ${new Date()}
        </div>
        `
        history.appendChild(newElement);
    }else {
        alert("Invalid pin");
        return;
    }
})
document.getElementById("transfer-btn").addEventListener("click",function () {
    const accountNumber = getValueFromInput("transfer-number");

    if(accountNumber.length != 11){
        alert("Invalid Account Number");
        return;
    }

    const amount = getValueFromInput("transfer-amount");

   
    const newBalance = getBalance() - Number(amount);
    
     if(newBalance < 0){
        alert("Insufficient Balance");
        return
    }
    const pin = getValueFromInput("pin-transfer");
    if(pin === "1122"){
        alert(`Transfer Successful to Account Number ${accountNumber}`);
        setBalance(newBalance);
    }else {
        alert("Invalid Pin");
        return;
    }
})
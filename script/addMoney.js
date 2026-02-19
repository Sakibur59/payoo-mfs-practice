document.getElementById("add-money-btn").addEventListener("click",function(){
    const Bank = getValueFromInput("add-money-bank");
    if(Bank === "Select a Bank"){
        alert("Please Select a Bank");
        return;
    }
    const accountNumber = getValueFromInput("account-number");
    if(accountNumber.length != 11){
        alert("Invalid Account Number");
        return;
    }

    const amount = getValueFromInput("add-amount");
    const newBalance = getBalance() + Number(amount);

    const pin = getValueFromInput("add-money-pin");
    if(pin === "1122"){
        alert(`Add Money Successful from ${Bank} at ${new Date()}`);
        setBalance(newBalance);
    }else {
        alert("Invalid Pin");
        return;
    }
})
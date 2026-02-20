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

        const history = document.getElementById("history");

        const newElement = document.createElement("div");
        newElement.innerHTML = `
        <div class="p-5 bg-base-100">
          Add Money Successful ${amount} TAKA from ${Bank}
          ,Account Number ${accountNumber} at ${new Date()}
        </div>
        `
        history.appendChild(newElement);
    }else {
        alert("Invalid Pin");
        return;
    }
})
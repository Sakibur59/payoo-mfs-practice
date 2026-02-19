//for get input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value);
    return value;
}

//for get balance 
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    return Number(balance);
}

function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

function showAll(id){
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");

    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");

    const seleted = document.getElementById(id);
    seleted.classList.remove("hidden");
}
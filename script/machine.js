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
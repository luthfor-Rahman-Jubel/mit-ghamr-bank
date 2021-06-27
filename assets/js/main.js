
// Login button  evenHandler 
const clickButn = document.getElementById("clickBtn");
clickButn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const submitArea = document.getElementById("transaction-area");
    submitArea.style.display = "block";
});

//deposite button eventHandler
const depositeBtn = document.getElementById("deposite-btn");
depositeBtn.addEventListener("click",function(){

    const depositeNumber = getInputNumber("deposite-amount");

    updateSpanText("current-deposite",depositeNumber);
    updateSpanText("current-balance",depositeNumber);
    document.getElementById("deposite-amount").value = "";
});

//widthraw button event handler

const widthrawBtn = document.getElementById("widthraw-btn");
widthrawBtn.addEventListener("click",function(){
 const withdrawNumber = getInputNumber("withdraw-amount");
 updateSpanText("withdraw-deposite",withdrawNumber);
 updateSpanText("current-balance", -1* withdrawNumber);
 
 document.getElementById("withdraw-amount").value = "";
 
});

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositeNumber){
    const currentDeposite = document.getElementById(id).innerText;
    const currentNumber = parseFloat(currentDeposite);
    const totalDeposite = depositeNumber + currentNumber;
    document.getElementById(id).innerText = totalDeposite;
}
  





console.log("Console message test");

function calcAmount(){
    // 0 === false -> a kettő egyenlő e egymással, plusz a típus is megegyezik e
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount"); // span show-amount class-je
    
    let amountNumber = parseInt(amountInput.value);

    // if(isNaN(amountNumber)){
    //     amountNumber=0;
    // }
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    if(!(amountNumber>=1 && amountNumber <=10)){

        alert("Max 10, min 1");
        return; // visszatér, nem fut tovább
    }
    let amount = parseInt(amountInput.value) * price;
    showAmount.innerHTML = amount;
    alert("Fizetendő: "+amount+" Ft");
}

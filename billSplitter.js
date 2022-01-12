const split = () => {
    var total = parseFloat(document.querySelector('#total').value);
    var numOfPeople = parseInt(document.querySelector('#people').value);
    var tipPercentage = parseInt(document.querySelector('#tipPerc').value);
    var tipAmount = parseInt(document.querySelector('#tipMan').value);

    if (total < 0 || numOfPeople < 0) {
        alert("Both the bill and the number of people should be positive values");
    } else if (Number.isNaN(total)) {
        alert("Enter the amount");
    } else if (Number.isNaN(numOfPeople)) {
        alert("Enter the number of people");
    } else {
        if ((Number.isNaN(tipPercentage) && Number.isNaN(tipAmount)) || (tipPercentage > 0) || (tipAmount > 0)) {
            if (!Number.isNaN(tipPercentage) && !Number.isNaN(tipAmount)) {
                alert("Choose either the percentage or amount");
            } else {
                if (Number.isNaN(tipPercentage) && Number.isNaN(tipAmount)) {
                    splitVal = total / numOfPeople;
                } else {
                    var splitVal = Number.isNaN(tipPercentage) ? (total + tipAmount) / numOfPeople : (total + (total * (tipPercentage / 100))) / numOfPeople;
                }
                document.querySelector('#personSplit').innerHTML = splitVal.toFixed(2);
            }
        } else {
            alert("Tip amount should be a positive value");
        } 
    }
}

const calSplit = document.querySelector('#calcBtn');
calSplit.addEventListener('click', (e) => {
    e.preventDefault();
    split();
})

const reset = document.querySelector('#clearBtn');
reset.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('form').reset();
})
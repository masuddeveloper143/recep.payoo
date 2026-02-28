

document.getElementById('cashout_btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // input value

        const cashoutNumber = document.getElementById('cashout_number');
        const cashoutAmount = document.getElementById('cashout_amount');
        const cashoutPin = document.getElementById('cashout_pin');
        const cashoutMinBalance = document.getElementById('add_money_min_balence').innerText;

        // coverted area

        const converdcashoutAmount = parseFloat(cashoutAmount);
        const convertedcashoutPin = parseFloat(cashoutPin);
        const convertedcashoutMinBalance = parseInt(cashoutMinBalance);

        if (cashoutNumber.length === 11 && cashoutNumber.startsWith("01")) {

            console.('number is oky');
        }
        else {
            alert('incorrect number');
        }

    });
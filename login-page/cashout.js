

document.getElementById('cashout_btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // input value

        const cashoutNumber = document.getElementById('cashout_number').value;
        const cashoutAmount = document.getElementById('cashout_amount').value;
        const cashoutPin = document.getElementById('cashout_pin').value;
        const cashoutMinBalance = document.getElementById('add_money_min_balence').innerText;

        // coverted area

        const converdcashoutAmount = parseFloat(cashoutAmount);
        const convertedcashoutPin = parseFloat(cashoutPin);
        const convertedcashoutMinBalance = parseInt(cashoutMinBalance);

        if (cashoutNumber.length === 11 && cashoutNumber.startsWith("01")) {

            if (convertedcashoutPin === 1234) {
                alert('successful CASHOUT🎉');
                const sum = convertedcashoutMinBalance - converdcashoutAmount;
                document.getElementById('add_money_min_balence').innerText = sum;
            } else {
                alert('incorrect PIN');
            }
        }

        else {
            alert('incorrect number');
        }

    });
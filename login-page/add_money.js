document.getElementById('first_login_section').style.display = "none";
document.getElementById('cashout-section').style.display = "none";

document.getElementById('add-money_box')
    .addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('first_login_section').style.display = "block";
        document.getElementById('cashout-section').style.display = "none";
    })

document.getElementById('cashout_box')
    .addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('cashout-section').style.display = "block";
        document.getElementById('first_login_section').style.display = "none";
    })

document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addNumber = document.getElementById('add-money_number').value;
        const addAmount = document.getElementById('add_money_amount').value;
        const addPin = document.getElementById('add_money_pin').value;
        const addMoneyMinBalance = document.getElementById('add_money_min_balence').innerText;

        // converted area 
        const convertedaddAmount = parseFloat(addAmount);
        const convertedaddPin = parseFloat(addPin);
        const convertedaddMoneyMinBalance = parseFloat(addMoneyMinBalance);
        // console.log(convertedaddAmount, convertedaddPin, addNumber);
        if (addNumber.length === 11 && addNumber.startsWith("01") && convertedaddPin === 1234) {

            alert('successful add money🎉');
            const sum = convertedaddAmount + convertedaddMoneyMinBalance;
            document.getElementById('add_money_min_balence').innerText = sum;

        }

        else {
            alert('invalid ');
        }



    });
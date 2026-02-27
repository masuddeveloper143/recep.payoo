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

        const addAmount = document.getElementById('add_money_amount').value;
        const addPin = document.getElementById('amount').value;
        const addMoneyMinBalancr = document.getElementById('add_money_min_balence').innerText;
    
    })
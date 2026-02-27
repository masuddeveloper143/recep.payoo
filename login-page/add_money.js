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
     

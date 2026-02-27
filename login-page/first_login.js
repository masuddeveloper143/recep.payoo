document.getElementById('btn-login')
    .addEventListener('click', function (event) {

        // alert()
        event.preventDefault();

        const acountNumber = document.getElementById('input-number').value;
        // console.log(typeof acountNumber); 
        const pinNmber = document.getElementById('input-pin');

        const convertedNumber = parseInt(acountNumber);
        const convertedPin = parseInt(pinNmber);

        if (convertedNumber.length === 11) {

            if (convertedPin === 1234) {
                alert('Successful Login 🎉');
            }
            else {
                alert('Incorrect PIN');
            }
        }

        else {
            alert('Incorrect Number')
        }
    })
document.getElementById('btn-login')
    .addEventListener('click', function (event) {

        // alert()
        event.preventDefault();

        const acountNumber = document.getElementById('input-number').value;
        // console.log(typeof acountNumber); 
        const pinNmber = document.getElementById('input-pin');

        const convertedNumber = parseInt(acountNumber);
        const convertePin = parseInt(pinNmber);

        if (convertedNumber === 11) {

            if (convertePin === 1234) {
                alert('successfull login 🎉');
            }
            else {
                alert('incorrct your pin');
            }
        }

        else {
            alert('incorrct your number')
        }
    })
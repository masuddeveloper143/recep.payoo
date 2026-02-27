document.getElementById('btn-login')
    .addEventListener('click', function (event) {

        // alert()
        event.preventDefault();

        const acountNumber = document.getElementById('input-number').value;
        // console.log(typeof acountNumber); 
        const pinNmber = document.getElementById('input-pin').value;




        if (acountNumber.length === 11 && acountNumber.startsWith("01")) {
            const convertedPin = parseInt(pinNmber);
            if (convertedPin === 1234) {
                alert('Successful Login 🎉');
                window.location = "min.html";

            }
            else {
                alert('Incorrect PIN');
            }
        }

        else {
            alert('Incorrect Number')
        }
    })
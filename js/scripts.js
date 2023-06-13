const myButton = document.getElementById('click-button');
myButton.addEventListener('click',
    
    function () {
        const km = document.getElementById('km').value;
        const age = document.getElementById('age').value;

        if (isNaN(parseInt(age)) || isNaN(parseInt(km))) {
            alert ('Scrivere solo valori numerici')
        }
        else {
            const prezzoPerKm = 0.21;
            let prezzoIntero = km * prezzoPerKm;

        if(age<18){
            prezzoIntero *= 0.8;
        }
        else if(age>65){    
            prezzoIntero *= 0.6;
        }
        document.getElementById('price').innerHTML = prezzoIntero.toFixed(2) + ' €';
        }
    }

    
)    
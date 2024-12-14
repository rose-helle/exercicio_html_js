const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numA = parseInt(document.getElementById('numberA').value);
    const numB = parseInt(document.getElementById('numberB').value);

    document.querySelector('.positive').style.display = 'none';
    document.querySelector('.equal').style.display = 'none';
    document.querySelector('.negative').style.display = 'none';
    
        if (numB > numA){
        document.querySelector('.positive').style.display = 'block';
        } else if (numB === numA) {
            document.querySelector('.equal').style.display = 'block';
        } else {
            document.querySelector('.negative').style.display = 'block';
        }
    })

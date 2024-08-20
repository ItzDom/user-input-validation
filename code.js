let button = document.querySelector('#checkBtn');  
let message = document.querySelector('.message');
let container = document.querySelector('main');

button.addEventListener('click', () => {
    let text = document.getElementById('textbox').value;
    
  
    let reverse = text.split('').reverse().join('');
    let forward = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    let backward = reverse.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if text is empty
    if (text === '') {
        alert('Write something in the text box.');
    } else {
        // Check for palindrome
        if (forward === backward) {
            message.innerHTML = "Yes, it is a Palindrome!";
            message.classList.add('correct');
            message.classList.remove('wrong');
            container.style.height = '390px';
        } else {
            message.innerHTML = "No, it is not a Palindrome.";
            message.classList.add('wrong');
            message.classList.remove('correct');
            container.style.height = '390px';
        }
    }
});

// Additional functionality for validating name and zip code
document.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector('#checkBtn');

    button.addEventListener('click', () => {
        // Get the name values
        let firstName = document.getElementById('firstName');
        let lastName = document.getElementById('lastName');
        let fullName = `${firstName} ${lastName}`;
        let zipCode = document.getElementById('zipCode');

        // Validate the full name length
        if (fullName.length > 20) {
            alert('Full name cannot exceed 20 characters.');
            return;
        }

        // Validate zip code 
        if (zipCode.length !== 5 || isNaN(zipCode)) {
            alert('Please enter a valid 5-digit Zip Code.');
            return; 
        }

        // If both validations pass the palindrome check will work
    });
});
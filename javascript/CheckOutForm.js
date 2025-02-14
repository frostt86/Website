let clearBtn = document.querySelector('.clearBtn');
let formInputs = document.querySelectorAll('.formin input, .formin select');

document.addEventListener('DOMContentLoaded', function() {
    clearBtn.addEventListener('click', function(event) {
        event.preventDefault();
        formInputs.forEach(function(input) {
            input.value = ''; // Clearing the value of each input/select element
        });
    });
});

const buyButton = document.querySelector(".buyBtn");
let FormFilled = false;
const FormFilledFunc = () => {
    FormFilled = true; // Assume form is filled initially
    formInputs.forEach(function(input) {
        if (input.value === '') {
            FormFilled = false; // If any input is blank, set FormFilled to false
        }
    });
}
buyButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    FormFilledFunc();
    console.log(FormFilled);
    if(FormFilled) {
        alert("Thank you for shopping with us!");
        formInputs.forEach(function(input) {
            input.value = ''; // Clearing the value of each input/select element
        });
        window.location.href = "shop.html";
    } else {
        alert("Please fill out all the fields!");
    }
});
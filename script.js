const myForm = document.querySelector('form'); 
const buttons = document.querySelectorAll('button');
const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
let spanResult = document.createElement('span'); 

function multiplyAndDivide(n1, n2) {

    buttons.forEach(function(btn) {
            btn.addEventListener("click", function(e) {
                e.preventDefault();
                   
                if (number1.value == "" || number2.value == "") {
                    spanResult.innerHTML = "Error";
                } else 
                    if (btn.innerHTML == 'Multiply') {
                    spanResult.innerHTML = "The Result is : " + (n1.value * n2.value);
                } else 
                    if (btn.innerHTML == 'Divide') {
                    spanResult.innerHTML = "The Result is : " +  (n1.value / n2.value);
                } else 
                    if (btn.innerHTML == "Clear") {
                    n1.value = "";
                    n2.value = "";
                    document.querySelector('.result-wrapper').removeChild(spanResult);
                }

                document.querySelector('.result-wrapper').appendChild(spanResult);
                })
                })
        }

multiplyAndDivide(number1, number2);
        
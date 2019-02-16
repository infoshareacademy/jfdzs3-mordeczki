$(function(){
    $('.selectpicker').selectpicker();
});

//cookies//
CookieAlert.init();

//calculator
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		} else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		} else if(operators.indexOf(btnVal) > -1) {
			var lastChar = inputVal[inputVal.length - 1];
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}else {
			input.innerHTML += btnVal;
		}
		e.preventDefault();
	} 
}

function sumValues() {
	let num1, num2, res;
	num1 = Number(document.calculator.txtnum1.value);
	num2 = Number(document.calculator.txtnum2.value);
	res = num1 + num2 + ' zł';
	document.calculator.txtres.value = res;
}

let btnShowCalculator = document.querySelector('.check-paid');
let btnHideCalculator = document.querySelector('.check-paid-hide');
let hiddenCalculator = document.querySelector('form');

btnShowCalculator.addEventListener('click', function() {
   hiddenCalculator.style.display = "block";
});

btnHideCalculator.addEventListener('click', function() {
	hiddenCalculator.style.display = "none";
	hiddenCalculator.reset();
});

$(function(){
    $('.selectpicker').selectpicker();
});

//cookies//
CookieAlert.init();

//calculator
function sumValues() {
	let num1, num2, res;
	num1 = Number(document.querySelector(".txtnum1").value);
	num2 = Number(document.querySelector(".txtnum2").value);
	res = num1 + num2 + ' zł';
	document.querySelector(".txtres").value = res;
}

let btnShowCalculator = document.querySelector('.check-paid');
let btnHideCalculator = document.querySelector('.check-paid-hide');
let hiddenCalculator = document.querySelector('.calculator');

btnShowCalculator.addEventListener('click', function() {
   hiddenCalculator.style.display = "block";
});

btnHideCalculator.addEventListener('click', function() {
	hiddenCalculator.style.display = "none";
	hiddenCalculator.reset();
});

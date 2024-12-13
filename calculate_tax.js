"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});


// Process Entry Function
function processEntry() {
	let income = $("#income").value;
	income = parseFloat(income);

	if (isNaN(income) || income <= 0) {
		alert("Please enter a number greater than zero."); 
		$("#income").focus();
		return;
	} else {
		const tax = calculateTax(income);
		$("#tax").value = tax.toFixed(2);
		$("#income").focus();
	}
}

// Calculate tax brackets 

function calculateTax(income) {
	let tax;
	if (income > 0 && income <= 9875) {
		tax = income * 0.10;
	} else if (income > 9875 && income <= 40125) {
		tax = 987.50 + (income - 9875) * 0.12;
	} else if (income > 40125 && income <= 85525) {
	 	tax = 4617.50 + (income - 40125) * 0.22;
	} else if (income > 85525 && income <= 163300) {
		tax = 14605.50 + (income - 85525) * 0.24;
	} else if (income > 163300 && income <= 207350) {
		tax = 33271.50 + (income - 163300) * 0.32;
	} else if (income > 207350 && income <= 518400) {
		tax = 47367.50 + (income - 207350) * 0.35;
	} else {
		tax = 156235.00 + (income - 518400) * 0.37;
	}
	return tax;
}
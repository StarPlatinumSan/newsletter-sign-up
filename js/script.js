"use strict";

document.addEventListener("DOMContentLoaded", function () {
	const emailForm = document.getElementById("emailSubmit");
	const emailInput = document.getElementById("email");
	const button = document.getElementById("emailButton");
	const msgError = document.getElementById("errorMessage");
	const confirmedCard = document.getElementById("confirmed");
	const mainPage = document.getElementById("mainPage");
	const dismissButton = document.getElementById("dismiss");
	const text = document.getElementById("emailText");

	function emailError(event) {
		event.preventDefault();

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailPattern.test(emailInput.value)) {
			emailInput.style.backgroundColor = "hsl(4, 100%, 67%, 30%)";
			emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
			msgError.style.display = "block";
		} else {
			mainPage.classList.add("hidden");
			confirmedCard.classList.remove("hidden");
			text.textContent = emailInput.value;
			text.style.fontWeight = "bold";
		}
	}

	function erased(event) {
		msgError.style.display = "none";
		emailInput.style.backgroundColor = "";
		emailInput.style.border = "";
	}

	function backToMain(event) {
		mainPage.classList.remove("hidden");
		confirmedCard.classList.add("hidden");
	}

	button.addEventListener("click", emailError);
	emailForm.addEventListener("input", erased);
	dismissButton.addEventListener("click", backToMain);
});

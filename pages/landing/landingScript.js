var clock = 0;

const spin = document.getElementById("spinner");
const bodyContainer = document.getElementById("bodyContainer");
const landingText = document.getElementById("landingText");
const landingTextBg = document.getElementById("landingTextBg");
const redirectButtonsContainer = document.getElementById("redirectButtonsContainer");

function loadIn(){
	setTimeout(() => {
		spin.classList.add("hidden");
		bodyContainer.classList.remove("hidden");
		landingText.classList.remove("hidden");
		landingTextBg.classList.remove("hidden");
		redirectButtonsContainer.classList.remove("hidden");
	}, 1000);
}

function backToIndex(){
	spin.classList.remove("hidden");
	bodyContainer.classList.add("hidden");
	landingText.classList.add("hidden");
	landingTextBg.classList.add("hidden");
	redirectButtonsContainer.classList.add("hidden");
	setTimeout(() => {
		window.location.href = "../../index.html";
	}, 1000);
}

function redirect(where){
	spin.classList.remove("hidden");
	bodyContainer.classList.add("hidden");
	landingText.classList.add("hidden");
	landingTextBg.classList.add("hidden");
	redirectButtonsContainer.classList.add("hidden");
	setInterval(() => {
		window.location.href = 'https://' + where;
	}, 1000);
}


window.addEventListener("DOMContentLoaded", () => {
	loadIn();
});
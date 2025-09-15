var clock = 0;

const spin = document.getElementById("spinner");
const bodyContainer = document.getElementById("bodyContainer");
const landingText = document.getElementById("landingText");
const landingTextBg = document.getElementById("landingTextBg");

function loadIn(){
	setTimeout(() => {
		spin.classList.add("hidden");
		bodyContainer.classList.remove("hidden");
		landingText.classList.remove("hidden");
		landingTextBg.classList.remove("hidden");
	}, 1000);
}

function backToIndex(){
	spin.classList.remove("hidden");
	bodyContainer.classList.add("hidden");
	landingText.classList.add("hidden");
	landingTextBg.classList.add("hidden");
	setTimeout(() => {
		window.location.href = "../../index.html";
	}, 1000);
}


window.addEventListener("DOMContentLoaded", () => {
	loadIn();
});
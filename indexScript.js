const countdown = document.getElementById("countdown");
const bodyContainer = document.getElementById("bodyContainer");
const redirectTextTime = document.getElementById("redirectTextTime");
const init = parseInt(countdown.textContent);
const spin = document.getElementById("spinner");

var n = Math.round(init);

function start() {
	let timer = setInterval(() => {
		n -= 1;
		update();
		if (n === 0) {
 			clearInterval(timer);
			spin.classList.remove("hidden");
			bodyContainer.classList.add("hidden");
			window.location.href = '../absurd-oliver.github.io/landingPageProject/pages/landing/landing.html';
		}
	}, 1000);
}

function update() {
	countdown.textContent = `${n}`;
	redirectTextTime.textContent = `${Math.round(init)}`;
}

window.addEventListener("DOMContentLoaded", () => {
	update();
	start();
});
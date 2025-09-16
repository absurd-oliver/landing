const countdown = document.getElementById("countdown");
const bodyContainer = document.getElementById("bodyContainer");
const redirectTextTime = document.getElementById("redirectTextTime");
const init = parseInt(countdown.textContent);
const spin = document.getElementById("spinner");
const indexTitle = document.getElementById("indexTitle");
const indexFavicon = document.getElementById("indexFavicon");

var n = Math.round(init);
var m = 0;
var o = 0;

function start() {
	let timer = setInterval(() => {
		n -= 1;
		update();
		if (n === 0) {
 			clearInterval(timer);
			spin.classList.remove("hidden");
			bodyContainer.classList.add("hidden");
			window.location.href = 'https://absurd-oliver.github.io/landing/pages/landing/landing.html';
		}
	}, 1000);
}

function titleAnim(){
	setInterval(() => {
		if (m === 0) {
			indexTitle.textContent = 'Redirecting';
			m += 1;
		} else if (m === 1){
			indexTitle.textContent = 'Redirecting.';
			m += 1;
		} else if (m === 2){
			indexTitle.textContent = 'Redirecting..';
			m += 1;
		} else if (m === 3) {
			indexTitle.textContent = 'Redirecting...';
			m = 0;
		}
	}, 500);
}

function faviAnim(){
	setInterval(() => {
		if (o === 0) {
			indexFavicon.setAttribute("href", "index_favicons/index0.ico");
			o += 1;
		} else if (o === 1){
			indexFavicon.setAttribute("href", "index_favicons/index1.ico");
			o += 1;
		} else if (o === 2){
			indexFavicon.setAttribute("href", "index_favicons/index2.ico");
			o += 1;
		} else if (o === 3) {
			indexFavicon.setAttribute("href", "index_favicons/index3.ico");
			o += 1;
		} else if (o === 4){
			indexFavicon.setAttribute("href", "index_favicons/index4.ico");
			o += 1;
		} else if (o === 5){
			indexFavicon.setAttribute("href", "index_favicons/index5.ico");
			o += 1;
		} else if (o === 6) {
			indexFavicon.setAttribute("href", "index_favicons/index6.ico");
			o += 1;
		} else if (o === 7) {
			indexFavicon.setAttribute("href", "index_favicons/index7.ico");
			o = 0;
		}
	}, 250);
}

function update() {
	countdown.textContent = `${n}`;
	redirectTextTime.textContent = `${Math.round(init)}`;
}

window.addEventListener("DOMContentLoaded", () => {
	update();
	start();
	titleAnim();
	faviAnim();
});

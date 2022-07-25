let bg = document.getElementById("bg");
let rockwall = document.getElementById("rockwall");
let text = document.getElementById("text");
window.addEventListener("scroll", function () {
	var value = window.scrollY;
	bg.style.top = value * 0.5 + "px";
	rockwall.style.top = value * 0.15 + "px";
	text.style.top = value * 1 + "px";
});


const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const result = document.querySelector("#result");

btn1.addEventListener("click", (e) => {
	result.style.backgroundColor = "Green";
});
btn2.addEventListener("click", (e) => {
	result.style.backgroundColor = "Orange";
});
btn3.addEventListener("click", (e) => {
	result.style.backgroundColor = "Purple";
});

function changeBg(color) {
	result.style.backgroundColor = color;
}
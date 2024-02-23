const open = document.querySelector("#open");
const desc = document.querySelector("#desc");

function showDetail() {
	desc.style.display = "block";
	open.style.display = "none";
}

function hiddenDetail() {
	desc.style.display = "none";
	open.style.display = "block";
}

const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const res = document.querySelector("#res");

btnPlus.addEventListener("click", (e) => {
	let k = document.querySelector("#res").innerHTML;
	k++;
	document.querySelector("#res").innerHTML = k;
});

btnMinus.addEventListener("click", (e) => {
	let k = document.querySelector("#res").innerHTML;
	k--;
	document.querySelector("#res").innerHTML = k;
});
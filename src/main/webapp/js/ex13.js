const link = document.querySelector("#a");

// 요소명.addEventListener("이벤트명", (전달될값) => { 실행구문 });

link.addEventListener("click", (e) => {
	// alert("눌렀네")

	// 해당 이벤트 기능을 동작하지 마세요. 지금은 링크기능을 하지 마세요
	e.preventDefault();
	console.log("눌렀네");
});

const box = document.querySelector("#box");
/*box.addEventListener("click", (e) => {
 box.style.backgroundColor = "lightpink";
});*/

// 마우스가 영역에 왔을 때 mouseenter
box.addEventListener("mouseenter", (e) => {
	box.style.backgroundColor = "lightpink";
});

// 마우스가 영역을 벗어났을 때 mouseleave
box.addEventListener("mouseleave", (e) => {
	box.style.backgroundColor = "aqua";
});
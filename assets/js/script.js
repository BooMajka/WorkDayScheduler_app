function clock(){
	let date = moment().format('MMMM Do YYYY, h:mm:ss a');
	$(".date").text(date);
}
const interval = setInterval(clock, 1000);

var note = {
	dueTime: "",
	id: "",
	input: ""
};

// / generate listings
function loadNotes() {
	// note = JSON.parse(localStorage.getItem("notes"));
	$("input").each(function(){
		var id = $(this).attr("id");
		var note = JSON.parse(localStorage.getItem(id));
		if (note) {
			$(this).val(note.input);
		}
		let currentTime = moment().format('h a');
 
		if ($(this).siblings("p").text() < currentTime) {
			$(this).addClass("past");
		} else if ($(this).siblings("p").text() > currentTime) {
			$(this).addClass("future");
		} else {
			$(this).addClass("present");
		}
	});


}
loadNotes();


// saving notes in local storage
function saveLocalStorage(ind) {

	$("input").each(function(){
		if ( $(this).attr("id") == ind ) {
			note.dueTime = $(this).siblings("p").text(),
			note.id = $(this).attr("id");
			note.input = $(this).val().trim();
			console.log(note);
			localStorage.setItem(note.id, JSON.stringify(note));
		}
});
}

var saveBtn = document.querySelectorAll(".saveBtn");
saveBtn.forEach((el, index) => {
	el.setAttribute("id", index);
	// el.addEventListener("click", function(){
	// 	console.log(el.id + " button clicked")
	// });
	el.addEventListener("click", function(){
		saveLocalStorage(index);
	});
	});


//  let timeBlock = document.querySelector(".time-block")
//  console.log(timeBlock);

// function generateTimeBlock() {
// 	var dayhrs = 12;

// 	for( let i = 0; i < dayhrs; i++ ) {
// 		let row = document.createElement("div");
// 		row.classList.add("row");
// 		let p = document.createElement("p");
// 		p.classList.add("hour");
// 		p.innerText= `${moment().add(i, "hours").format('h a')}`;
// 		let dec = document.createElement("div");
// 		dec.classList.add("description");
// 		dec.setAttribute("id", i);
// 		dec.setAttribute("contentEditable", true)
// 		dec.addEventListener("input", function(){
// 		console.log(dec.id + " input detected " + dec.innerHTML);
// 	});
// 		let button = document.createElement("button");
// 		button.classList.add("saveBtn");
// 		button.setAttribute("id", i);
// 		button.addEventListener("click", function(){
// 				console.log(button.id + " button clicked")
// 			});
// 		button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
// 		viewBox="0 0 24 24"><path
// 			d="M15.003 3h2.997v5h-2.997v-5zm8.997 1v20h-24v-24h20l4 4zm-19 5h14v-7h-14v7zm16 4h-18v9h18v-9z" /></svg>`

// 			row.appendChild(p);
// 			row.appendChild(dec);
// 			row.appendChild(button);

// 	timeBlock.appendChild(row);
// 	}
	
// }
// generateTimeBlock();
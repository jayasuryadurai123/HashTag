const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".nav-links");
const co_links = links.querySelectorAll("a");

hamburger.addEventListener("click",()=>{
	console.log("in");
	links.classList.toggle("toggle-menu");
})

co_links.forEach(li =>{
	li.addEventListener("click",()=>{
		console.log("out");
		links.classList.toggle("toggle-menu");
	})
})
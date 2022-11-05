// Header function

const menuBar = document.querySelector(".menu-icon")
const navBarContainer = document.querySelector(".navbar-container")
const xIcon = document.querySelector(".x-icon")
const searchIcon = document.querySelector(".search-icon-toggle")
const navBarSearchContainer = document.querySelector(".navbar-search-container")
const searchCancelToggle =document.querySelector(".search-cancel-toggle")
const inputContainer = document.querySelector(".input-container")

menuBar.addEventListener("click", () => {
    navBarContainer.style.right = "0"
})
xIcon.addEventListener("click", () => {
    navBarContainer.style.right = "-100%"
})
searchIcon.addEventListener("click", () => {
    navBarSearchContainer.style.top = "0"
    inputContainer.style.width = "100%"
    searchCancelToggle.style.transform = "scale(1)"
})
searchCancelToggle.addEventListener("click", () => {
    navBarSearchContainer.style.top = "-100%"
    inputContainer.style.width = "0"
    searchCancelToggle.style.transform = "scale(0)"
})

// arrow carousel function

const arrowLeft = document.querySelector(".arrow-left")
const arrowRight = document.querySelector(".arrow-right")
// const item = ()


// // let itemPage = Math.ceil(item.length/4);
// 	let l = 0;
// 	let movePer = 25.34;
// 	let maxMove = 203;

// arrowLeft.addEventListener("click", () => {
//     console.log("oksss")
//     item.style.left = "-100%"

// })
// arrowRight.addEventListener("click", () => {
//     console.log("ok")
//     l = l + movePer;
// 		if (item == 1){
//             l = 0; 
//         }
// 		for(const i of item)
// 		{
// 			if (l > maxMove){
//                 l = l - movePer;
//             }
// 			let okay = i.style.left = '-' + l + '%';
//             console.log(okay)
// 		}
// })
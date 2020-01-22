const characters = ["&", "#", "*", "+", "%", "?", "£", "@", "§", "$"]
//animateText()

//swup.on("contentReplaced", animateText)

$(document).ready(function() {
	setTimeout(setInterval(animateFlow, 20), 250)

	// setInterval(function() {
	// 	let numberLetters = 0
	// 	let counter = 0
	// 	if (numberLetters == 25) {
	// 		clearInterval()
	// 	} else {
	// 		numberLetters++
	// 		$(".myName").text(numberLetters)

	// 		setInterval(function() {
	// 			if (counter == 9) {
	// 				$(".text-animated:nth-child(" + numberLetters + ")").text("H")
	// 			} else {
	// 				let randomNbr = Math.floor(Math.random() * (characters.length - 1 - 0 + 1)) + 0
	// 				$(".text-animated:nth-child(" + numberLetters + ")").text(counter)
	// 				counter++
	// 			}
	// 		}, 50)
	// 	}
	// }, 250)
})

function animateFlow() {
	const numberOfLetter = 25
	for (let i = 1; i < numberOfLetter; i++) {
		loadHeader(2)
	}
}

function loadHeader(nthChild) {
	for (let i = 0; i < characters.length; i++) {
		let randomNbr = Math.floor(Math.random() * (characters.length - 1 - 0 + 1)) + 0
		$(".text-animated:nth-child(" + nthChild + ")").text(characters[randomNbr])
	}
}

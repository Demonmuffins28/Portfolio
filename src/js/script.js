import Swup from "swup"
const swup = new Swup() // only this line when included with script tag

const characters = ["&", "#", "*", "+", "%", "?", "£", "@", "§", "$"]
const originalLetter = [
	"H",
	"e",
	"y",
	",",
	"I",
	"'",
	"m",
	"M",
	"a",
	"r",
	"c",
	"o",
	",",
	"a",
	"w",
	"e",
	"b",
	"d",
	"e",
	"v",
	"e",
	"l",
	"o",
	"p",
	"e",
	"r",
	"."
]
const tentHTML = $("#home").html()
const cardHTML = $("#about").html()
const knifeHTML = $("#skills").html()
const axeHTML = $("#work").html()
const contactHTML = $("#contact").html()

init()
navbar()

swup.on("contentReplaced", function() {
	// Run these every contentReplace
	navbar()
	activePage()
	aboutMeAnimation()

	// Run this only on homepage
	if (document.querySelector("#homeBody")) {
		animateHeader()
	}
})

function init() {
	// For navbar hiding on smaller screen
	var swipe = new Hammer(document)

	if ($(window).width() <= 1100) {
		swipe.on("panright  panleft", function(e) {
			e.preventDefault()
			if (e.type == "panright") {
				// open menu
				$("#nav-placeholder").css("transform", "translateX(0px)")
				$("#homeBody").css("margin-left", "60px")
			} else {
				// close/hide menu
				$("#nav-placeholder").css("transform", "translateX(-60px)")
				$("#homeBody").css("margin-left", "-60px")
			}
		})
	} else {
		$("#nav-placeholder").css("transform", "translateX(0px)")
		$("#homeBody").css("margin-left", "60px")
	}

	$(window).resize(function() {
		if ($(window).width() <= 1100) {
			swipe.on("panright  panleft", function(e) {
				e.preventDefault()
				if (e.type == "panright") {
					// open menu
					$("#nav-placeholder").css("transform", "translateX(0px)")
					$("#homeBody").css("margin-left", "0px")
				} else {
					// close/hide menu
					$("#nav-placeholder").css("transform", "translateX(-60px)")
					$("#homeBody").css("margin-left", "-60px")
				}
			})
		} else {
			$("#nav-placeholder").css("transform", "translateX(0px)")
			//$("#homeBody").css("margin-left", "0px");
		}
	})

	var fileName = location.pathname.split("/").slice(-1)
	if (fileName == "about.html") {
		// Star-1
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-1").css("grid-column", randomColumn)
			$(".star-1").css("grid-row", randomRow)
		}, 3000)

		// Star-2
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-2").css("grid-column", randomColumn)
			$(".star-2").css("grid-row", randomRow)
		}, 4500)

		// Star-3
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-3").css("grid-column", randomColumn)
			$(".star-3").css("grid-row", randomRow)
		}, 3500)

		// Star-4
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-4").css("grid-column", randomColumn)
			$(".star-4").css("grid-row", randomRow)
		}, 4000)

		// Star-5
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-5").css("grid-column", randomColumn)
			$(".star-5").css("grid-row", randomRow)
		}, 5000)

		// Star-6
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-6").css("grid-column", randomColumn)
			$(".star-6").css("grid-row", randomRow)
		}, 2500)

		// Star-7
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-7").css("grid-column", randomColumn)
			$(".star-7").css("grid-row", randomRow)
		}, 3300)

		// Star-8
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-8").css("grid-column", randomColumn)
			$(".star-8").css("grid-row", randomRow)
		}, 4200)
	}
	//glitching();
	animateHeader()
}

// function glitching() {
//   var bg = $(".myName")[0];
//   var count = 5;
//   for (var i = 0; i < count; i++) {
//     var glitchBox = document.createElement("::after");
//     glitchBox.className = "box";
//     bg.appendChild(glitchBox);
//   }
// Make a glitchy effect for the full page (full image usualy)
//setInterval(function() {
// var glitch = $(".box")
// for (var i = 0; i < glitch.length; i++) {
// 	glitch[i].style.left = Math.floor(Math.random() * 60) + "%"
// 	glitch[i].style.top = Math.floor(Math.random() * 60) + "%"
// 	glitch[i].style.width = Math.floor(Math.random() * 150) + "px"
// 	glitch[i].style.height = Math.floor(Math.random() * 50) + "px"
// }
//}, 400)
// }

function animateHeader() {
	let nthChild = 1
	let counter = 0

	$(".text-animated").css("visibility", "hidden")
	$(".myName").css("visibility", "hidden")
	;(function eachLetter(letterIndex) {
		// Have the function for each letter queue and change letter
		$(".text-animated")
			.addClass("myName")
			.css("color", "#f3f3f3")

		setTimeout(() => {
			;(function loadHeader(nthChild, i) {
				// let each letter go through ~10 random signs
				setTimeout(() => {
					let randomNbr = Math.floor(Math.random() * (characters.length - 1 - 0 + 1)) + 0
					$(".text-data" + nthChild).css("visibility", "visible")
					$(".text-data" + nthChild).text(characters[randomNbr])
					if (--i) {
						loadHeader(nthChild, i)
					} else {
						$(".text-data" + nthChild).text(originalLetter[counter])
						counter++
						if (counter > 25) $(".text-animated").removeClass("myName")
					}
				}, 75)
			})(nthChild, characters.length)
			nthChild++

			if (--letterIndex) {
				eachLetter(letterIndex)
			}
		}, 55)
	})(27)
}

function navbar() {
	if ($(window).width() >= 700) {
		$("#homePage").hover(
			function() {
				$("#home").text("HOME")
			},
			function() {
				$("#home").html(tentHTML)
				//$("#home").html('<img class="home" src="../image/tent 1.*.svg" />');
			}
		)
		$("#aboutPage").hover(
			function() {
				$("#about").text("ABOUT")
			},
			function() {
				$("#about").html(cardHTML)
				//$("#about").html('<img class="about" src="../image/id-card-solid 1.svg" />');
			}
		)
		$("#skillsPage").hover(
			function() {
				$("#skills").text("SKILLS")
			},
			function() {
				$("#skills").html(knifeHTML)
				//$("#skills").html('<img class="skills" src="../image/knife 1.svg" />');
			}
		)
		$("#workPage").hover(
			function() {
				$("#work").text("MY WORK")
			},
			function() {
				$("#work").html(axeHTML)
				//$("#work").html('<img class="work" src="../image/axe 1.svg" />');
			}
		)
		$("#contactPage").hover(
			function() {
				$("#contact").text("CONTACT")
			},
			function() {
				$("#contact").html(contactHTML)
				//$("#contact").html('<img class="contact" src="../image/contact 1.svg" />');
			}
		)
	}
}

function activePage() {
	$(".activePage").toggleClass("activePage")
	var fileName = location.pathname.split("/").slice(-1)
	if (fileName == "index.html") {
		$("#homePage").toggleClass("activePage")
	} else if (fileName == "about.html") {
		$("#aboutPage").toggleClass("activePage")
	} else if (fileName == "skills.html") {
		$("#skillsPage").toggleClass("activePage")
	} else if (fileName == "work.html") {
		$("#workPage").toggleClass("activePage")
	} else if (fileName == "contact.html") {
		$("#contactPage").toggleClass("activePage")
	}
}

function aboutMeAnimation() {
	const aboutHeader = $(".aboutInfo h1")
		.text()
		.trim()

	const headerLength = aboutHeader.length
	let counter = 0
	;(function aboutAnimation(count, i) {
		setTimeout(() => {
			$(".aboutInfo h1").text(aboutHeader.substring(0, count + 1))
			count++
			if (--i) {
				aboutAnimation(count, i)
			}
		}, 100)
	})(counter, headerLength)
}

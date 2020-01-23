const characters = ["&", "#", "*", "+", "%", "?", "£", "@", "§", "$"];
//animateText()

//swup.on("contentReplaced", animateText)

$(document).ready(function() {});

let nthChild = 1;

/***************************LEAN TO USE PROMISES FOR THIS TO WORK (waiting for setTimeout to finish) */
(function eachLetter(letterIndex) {
  // Have the function for each letter queue and change letter
  setTimeout(() => {
    (function loadHeader(nthChild, i) {
      // let each letter go through ~10 random signs
      setTimeout(() => {
        let randomNbr =
          Math.floor(Math.random() * (characters.length - 1 - 0 + 1)) + 0;
        $(".text-animated:nth-child(" + nthChild + ")").text(
          characters[randomNbr]
        );

        if (--i) {
          loadHeader(nthChild, i);
        }
      }, 25);
    })(nthChild, characters.length);
    nthChild++;

    if (--letterIndex) {
      eachLetter(letterIndex);
    }
  }, 150);
})(25);

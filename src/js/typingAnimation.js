const characters = ["&", "#", "*", "+", "%", "?", "£", "@", "§", "$"];
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
];

let nthChild = 1;
let counter = 0;

(function eachLetter(letterIndex) {
  // Have the function for each letter queue and change letter
  $(".text-animated")
    .addClass("myName")
    .css("color", "#f3f3f3");

  setTimeout(() => {
    (function loadHeader(nthChild, i) {
      // let each letter go through ~10 random signs
      setTimeout(() => {
        let randomNbr =
          Math.floor(Math.random() * (characters.length - 1 - 0 + 1)) + 0;
        $(".text-data" + nthChild).css("visibility", "visible");
        $(".text-data" + nthChild).text(characters[randomNbr]);
        if (--i) {
          loadHeader(nthChild, i);
        } else {
          $(".text-data" + nthChild).text(originalLetter[counter]);
          counter++;
          if (counter > 25) $(".text-animated").removeClass("myName");
        }
      }, 75);
    })(nthChild, characters.length);
    nthChild++;

    if (--letterIndex) {
      eachLetter(letterIndex);
    }
  }, 55);
})(27);

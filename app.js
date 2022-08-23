let rand = Math.floor(Math.random() * 10) + 1;

prompt(Number);

if (Number < rand) {
    var outcome = ("Number chosen is too high");
    console.log("Number chosen is too high");
} else if (Number > rand) {
    var outcome = ("Number chosen is too low");
    console.log("Number chosen is too low");
} else {
    var outcome = ("Congratulations!");
    console.log("Congratulations");
}
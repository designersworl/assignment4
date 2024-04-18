var speakWord = "Hello";
var speakWord2= "Good Bye";

function speak(name) {
  console.log(speakWord + " " + name);
}
function speak2(name) {
  console.log(speakWord2 + " " + name);
}
function printname() {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
   var firstLetter = names[i].charAt(0).toLowerCase();
   if (firstLetter === 'j') {
    speak2(names[i]);
  }
  else {
    speak(names[i]);
  }
}

}

printname();

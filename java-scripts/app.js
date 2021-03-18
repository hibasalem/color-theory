
// this is hiba's js file 

alert("hello!My name is Hiba and i woild like to know more about you.");
var UserName = prompt("what is your name?");
var Age = prompt("hello " + UserName + "! how old are you?");
document.write("<h4>"+"name " + UserName +"age " + Age +"</h4>");
console.log(UserName,Age);

var favoriteColor = prompt("red or blue?");

if(favoriteColor=="red"){console.log('red'), document.body.style.backgroundColor ="#FA8072";}else if(favoriteColor=="blue"){console.log('blue'), document.body.style.backgroundColor ="#ADD8E6";}else{console.log('not red not blue')};

confirm("your page will be in your favorite color!\nEither OK or Cancel.");

document.write("<h4>"+"favorite Color is " + favoriteColor +"</h4>")
  

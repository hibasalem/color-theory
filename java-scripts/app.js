
// this is hiba's js file 

alert("hello! My name is Hiba and i would like to know more about you.");
var UserName = prompt("what is your name?");
var Age = prompt("hello " + UserName + "! how old are you?");
document.write("<h4>" + "name " + UserName + " age " + Age + "</h4>");
console.log(UserName, Age);



var favoriteColor = prompt("what is your favirote color?");

function getfavorateColor(userFavorateColor) {

    while (userFavorateColor !== "red" && userFavorateColor !== "blue") {
        userFavorateColor = prompt("please choose between red and blue")
    };

    if (userFavorateColor == "red") {
        console.log('red');
    } else if (userFavorateColor == "blue") {
        console.log('blue');
    }
    else {
        console.log('not red not blue')
    };
    return favoriteColor;
}
getfavorateColor(favoriteColor);
console.log(getfavorateColor(favoriteColor));

document.write("<h4>" + "favorite Color " + favoriteColor + "</h4>");



var NumberOfColorplattes = prompt('how many color plattes do you want to see?');
var colorPlatte = '';
var result = '';

function getNumberOfColorplattes(userNumberOfColorplattes) {

    if (favoriteColor == 'red') {
        colorPlatte = '<img src="photos/b1.png"/></br>';
        console.log(colorPlatte);
    }
    else if (favoriteColor == 'blue') {
        colorPlatte = '<img src="photos/b3.png"</br>';

    }

    for (var i = 0; i < userNumberOfColorplattes; i++) {
        result += colorPlatte;
    };

    return NumberOfColorplattes;
      
}
getNumberOfColorplattes(NumberOfColorplattes);
console.log(getfavorateColor(favoriteColor));

document.write(result);
console.log(result);





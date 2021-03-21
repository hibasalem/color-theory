
// this is hiba's js file 

alert("hello! My name is Hiba and i would like to know more about you.");
var UserName = prompt("what is your name?");
var Age = prompt("hello " + UserName + "! how old are you?");
document.write("<h4>"+"name " + UserName +" age " + Age +"</h4>");
console.log(UserName,Age);

/*
the old one was
var favoriteColor = prompt("red or blue?");
if(favoriteColor=="red"){console.log('red'), document.body.style.backgroundColor ="#FA8072";}else if(favoriteColor=="blue"){console.log('blue'), document.body.style.backgroundColor ="#ADD8E6";}else{console.log('not red not blue')};
confirm("your page will be in your favorite color!\nEither OK or Cancel.");
*/

var favoriteColor = prompt("what is your favirote color?");
while (favoriteColor !== "red" && favoriteColor !== "blue"){favoriteColor = prompt("please choose between red and blue")};
if(favoriteColor=="red"){console.log('red'), document.body.style.backgroundColor ="#FA8072";}else if(favoriteColor=="blue"){console.log('blue'), document.body.style.backgroundColor ="#ADD8E6";}else{console.log('not red not blue')};
console.log(favoriteColor);
alert("your page will be in your favorite color!");
document.write("<h4>"+"favorite Color " + favoriteColor + "</h4>");

//old
//confirm("your page will be in your favorite color!\n ok or Cancel.");

var NumberOfColorplattes = prompt('how many color plattes do you want to see?');

var colorPlatte = '';
var result = '';

if (favoriteColor == 'red' ) {
    colorPlatte = '<img src="photos/b1.png"/></br>';
    console.log(colorPlatte);
}
else if (favoriteColor == 'blue'){ 
    colorPlatte = '<img src="photos/b3.png"</br>';

}

for (var i = 0; i < NumberOfColorplattes; i++){
     result+=colorPlatte ;
    }
document.write(result + i);
console.log(result);


// unrelated option 


// if (NumberOfColorplattes>5){NumberOfColorplattes = prompt("please choose a number from 1 to 5 ")}
// else if (NumberOfColorplattes<1){NumberOfColorplattes = prompt("please choose a number from 1 to 5 ")}
//while (NumberOfColorplattes>=5 && NumberOfColorplattes<=1){NumberOfColorplattes = prompt("please choose a number from 1 to 5 ")};

// else if ( NumberOfClolrplattes =2 ){ColorPlatte = '<img src="photos/b1.png"/>','<img src="photos/b2.jpg"/>';}
// else if ( NumberOfClolrplattes =3 ){ColorPlatte = '<img src="photos/b1.png"/>','<img src="photos/b2.jpg"/>','<img src="photos/b3.png"/>';}
// else if ( NumberOfClolrplattes =4 ){ColorPlatte = '<img src="photos/b1.png"/>','<img src="photos/b2.jpg"/>','<img src="photos/b3.png"/>','<img src="photos/b4.jpg"/>';}
// else if ( NumberOfClolrplattes =5 ){ColorPlatte = '<img src="photos/b1.png"/>','<img src="photos/b2.jpg"/>','<img src="photos/b3.png"/>','<img src="photos/b4.jpg"/>','<img src="photos/b5.png"/>';};




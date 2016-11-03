//assigning the list of words and hints to array
var myWords = [{ word : "banana", hint : "fruit"},
			   { word : "three", hint : "number"},
			   { word : "blue", hint: "color"}
			   ];

//function to generate random number
function generateIntRandNumber (max,min) {
	var randomNumber = Math.floor(Math.random() * (max - min) + min);
	
	//delete this line
	console.log(randomNumber); 
	return randomNumber;
}

var arrayIndex = generateIntRandNumber(myWords.length,0);

//creating input element
//generating required number input boxes
for(var i=0; i<myWords[arrayIndex].word.length; i++) {
	var myinput = document.createElement("input");
	myinput.setAttribute('class','input');
	myinput.setAttribute('type','text');
	myinput.setAttribute('maxlength',1);
	var inputContainer = document.getElementsByClassName('input-container')[0];
	inputContainer.appendChild(myinput);
}

//giving hints to the users
document.getElementById('hint').innerHTML = (myWords[arrayIndex].hint);

//checking if the user input matches the word from the list
function check() {
	var inputText = [];
	var inputBoxElements = document.getElementsByClassName('input');

	for(i = 0; i < inputBoxElements.length; i++) {
    	inputText[i] = inputBoxElements[i].value;
	}

    //joining the letters from input box to form a word
	var inputTextJoined = inputText.join('');

	var n = inputTextJoined.length;

	if(myWords[arrayIndex].word === inputTextJoined){
		alert('You WON!!!');
	}
	else {
		alert("You have been HANGED!!!");
	}
}
/* global window */
//links
//http://eloquentjavascript.net/09_regexp.html

var messages = []; //array that hold the record of each string in chat
var lastUserMessage = ""; //keeps track of the most recent input string from the user
var botMessage = ""; //var keeps track of what the chatbot is going to say
var botName = 'Kyran'; //name of the chatbot
var UserName = 'User';

//edit this function to change what the chatbot says
function chatbotResponse() {
    'use strict';
    botMessage = "Sorry. I don't know the answer yet."; //the default message

    if (lastUserMessage === 'hi') {
        botMessage = 'Hi, How are you?';
    }

    if (lastUserMessage === 'hello') {
        botMessage = 'Hi, How are you?';
    }

    if (lastUserMessage === 'name') {
        botMessage = 'My name is ' + botName;
    }

    if (lastUserMessage === 'what is the time?') {
        botMessage = 'look at the bottom right of your screen';
    }

    if (lastUserMessage === 'claims') {
        botMessage = 'contact ***********';
    }

    if (lastUserMessage === 'contact number') {
        botMessage = 'who would you like to contact?';
    }
}

//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
    'use strict';
    var i;
    //if the message from the user isn't empty then run
    if (window.document.getElementById("chatbox").value !== "") {
        //pulls the value from the chatbox ands sets it to lastUserMessage
        lastUserMessage = window.document.getElementById("chatbox").value;
        //sets the chat box to be clear
        window.document.getElementById("chatbox").value = "";
        window.document.getElementById("chatbox").placeholder = "";
        //adds the value of the chatbox to the message array
        messages.push("<b>" + UserName + ":</b> " + lastUserMessage);
        //takes the return value from chatbotResponse() and outputs it
        chatbotResponse();
        //add the chatbot's name and message to the array messages
        messages.push("<b>" + botName + ":</b> " + botMessage);

        //outputs the last few messages to html
        for (i = 1; i < 8; i += 1) {
            if (messages[messages.length - i]) {
                window.document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
            }
        }
    }
}

//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
    'use strict';
    var x = e || window.event;
    var key = (x.keyCode || x.which);
    if (key === 13 || key === 3) {
        //runs this function when enter is pressed
        newEntry();
    }
    if (key === 38) {
        window.console.log('hi');
        //window.document.getElementById("chatbox").value = lastUserMessage;
    }
}

//runs the keypress() function when a key is pressed
window.document.onkeypress = keyPress;

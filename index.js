/* global window */
//links
//http://eloquentjavascript.net/09_regexp.html
var botName = 'Kyran';

//edit this function to change what the chatbot says
function chatbotResponse(userMessage) {
    'use strict';
    var defaultMessage = "Sorry. I don't know the answer yet.",
        messages = {
            'hi': 'Hi, How are you?',
            'hello': 'Hi, How are you?',
            'name': 'My name is ' + botName,
            'what is the time?': 'look at the bottom right of your screen',
            'claims': 'contact ***********',
            'contact number': 'who would you like to contact?'
        };

    if (messages[userMessage] !== undefined) {
        return messages[userMessage];
    }
    return defaultMessage;
}

function getNameTag(name) {
    'use strict';
    var tag = window.document.createElement('b'),
        boldText = name + ':',
        text = window.document.createTextNode(boldText);

    tag.appendChild(text);

    return tag;
}

function getLogEntry(name, message) {
    'use strict';
    var logEntry = window.document.createElement('p'),
        messageText = window.document.createTextNode(message),
        nameTag = getNameTag(name);

    logEntry.appendChild(nameTag);
    logEntry.appendChild(messageText);
    logEntry.className = 'chatlog';

    return logEntry;
}

//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry(entry) {
    'use strict';
    var userName = 'User',
        userMessage = getLogEntry(userName, entry),
        response = chatbotResponse(entry),
        botMessage = getLogEntry(botName, response),
        container = window.document.getElementById('chat-log');

    container.appendChild(userMessage);
    container.appendChild(botMessage);
}

function resetValue(target) {
    'use strict';
    target.value = '';
    target.placeholder = '';
}

//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
    'use strict';
    var x = e || window.event,
        key = (x.keyCode || x.which);
    if (key === 13 || key === 3) {
        //if the message from the user isn't empty then run
        if (x.target.value !== "") {
            //runs this function when enter is pressed
            newEntry(x.target.value);
            resetValue(x.target);
        }
    }
}
//runs the keypress() function when a key is pressed
window.document.onkeypress = keyPress;

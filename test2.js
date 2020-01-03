var top_1 = "   ";
var body_1 = "  |";
var bottom_1 = "  |";

var top_2 = " _ ";
var body_2 = " _|";
var bottom_2 = "|_ ";

var top_3 = " _ ";
var body_3 = " _|";
var bottom_3 = " _|";

var top_4 = "   ";
var body_4 = "|_|";
var bottom_4 = "  |";

var top_5 = " _ ";
var body_5 = "|_ ";
var bottom_5 = " _|";

var top_6 = "   ";
var body_6 = "|_ ";
var bottom_6 = "|_|";

var top_7 = " _ ";
var body_7 = "  |";
var bottom_7 = "  |";

var top_8 = " _ ";
var body_8 = "|_|";
var bottom_8 = "|_|";

var top_9 = " _ ";
var body_9 = "|_|";
var bottom_9 = " _|";

var top_0 = " _ ";
var body_0 = "| |";
var bottom_0 = "|_|";

var num = "45.6.8075...42.1.2345..67890";
var num_length = num.length;

function addTop() {
    var top = '';
    for (i = 0; i < num_length; i++) {
        if (num.charAt(i) != ".") {
            top += eval("top_" + num.charAt(i));
        } else {
            top += " ";
        }

    }
    console.log(top);
}

function addBody() {
    var body = '';
    for (i = 0; i < num_length; i++) {
        if (num.charAt(i) != ".") {
            body += eval("body_" + num.charAt(i));
        } else {
            body += " ";
        }
    }
    console.log(body);
}

function addBottom() {
    var bottom = '';
    for (i = 0; i < num_length; i++) {
        if (num.charAt(i) != ".") {
            bottom += eval("bottom_" + num.charAt(i));
        } else {
            bottom += ".";
        }
    }
    console.log(bottom);
}

addTop();
addBody();
addBottom();
var tp_1 = "   ";
var ltp_1 = " ";
var mid_1 = " ";
var rtp_1 = "|";
var lbt_1 = " ";
var bt_1 = " ";
var rbt_1 = "|";

var tp_2 = " _ ";
var ltp_2 = " ";
var mid_2 = "_";
var rtp_2 = "|";
var lbt_2 = "|";
var bt_2 = "_";
var rbt_2 = " ";

var tp_3 = " _ ";
var ltp_3 = " ";
var mid_3 = "_";
var rtp_3 = "|";
var lbt_3 = " ";
var bt_3 = "_";
var rbt_3 = "|";

var tp_4 = "   ";
var ltp_4 = "|";
var mid_4 = "_";
var rtp_4 = "|";
var lbt_4 = " ";
var bt_4 = " ";
var rbt_4 = "|";

var tp_5 = " _ ";
var ltp_5 = "|";
var mid_5 = "_";
var rtp_5 = " ";
var lbt_5 = " ";
var bt_5 = "_";
var rbt_5 = "|";

var tp_6 = "   ";
var ltp_6 = "|";
var mid_6 = "_";
var rtp_6 = " ";
var lbt_6 = "|";
var bt_6 = "_";
var rbt_6 = "|";

var tp_7 = " _ ";
var ltp_7 = " ";
var mid_7 = " ";
var rtp_7 = "|";
var lbt_7 = " ";
var bt_7 = " ";
var rbt_7 = "|";

var tp_8 = " _ ";
var ltp_8 = "|";
var mid_8 = "_";
var rtp_8 = "|";
var lbt_8 = "|";
var bt_8 = "_";
var rbt_8 = "|";

var tp_9 = " _ ";
var ltp_9 = "|";
var mid_9 = "_";
var rtp_9 = "|";
var lbt_9 = " ";
var bt_9 = "_";
var rbt_9 = "|";

var tp_0 = " _ ";
var ltp_0 = "|";
var mid_0 = " ";
var rtp_0 = "|";
var lbt_0 = "|";
var bt_0 = "_";
var rbt_0 = "|";

var num = "45.6.8075...42.1.2345..67890";
var num_length = num.length;

function addTop() {
    var top = '';
    for (i = 0; i < num_length; i++) {
        if (num.charAt(i) != ".") {
            top += eval("tp_" + num.charAt(i));
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
            body += eval("ltp_" + num.charAt(i)) + eval("mid_" + num.charAt(i)) + eval("rtp_" + num.charAt(i));
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
            bottom += eval("lbt_" + num.charAt(i)) + eval("bt_" + num.charAt(i)) + eval("rbt_" + num.charAt(i));
        } else {
            bottom += ".";
        }
    }
    console.log(bottom);
}

addTop();
addBody();
addBottom();
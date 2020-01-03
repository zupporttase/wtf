var topArr =    [ " _ ","   ", " _ ", " _ ", "   ", " _ ", " _ ", " _ ", " _ ", " _ " ];
var bodyArr =   [ "| |","  |", " _|", " _|", "|_|", "|_ ", "|_ ", "  |", "|_|", "|_|" ];
var bottomArr = [ "|_|","  |", "|_ ", " _|", "  |", " _|", "|_|", "  |", "|_|", " _|" ];

var num = "45.6.8075...42.1.2345..67890";
var num_length = num.length;
var top = '';
var body = '';
var bottom = '';

(function numberAnalogStyle() {

    for (i = 0; i < num_length; i++) {
        if (num.charAt(i) != ".") {
            top += topArr[num.charAt(i)];
            body += bodyArr[num.charAt(i)];
            bottom += bottomArr[num.charAt(i)];
        } else {
            top += " ";
            body += " ";
            bottom += ".";
        }
    }
})();

console.log(top);
console.log(body);
console.log(bottom);
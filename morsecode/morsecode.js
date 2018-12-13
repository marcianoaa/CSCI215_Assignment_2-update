function morseCode(){

    var text = document.getElementById("input").value;
    text = text.toUpperCase();
    text = text.replace(/\./g," ");
    text = text.replace(/ /g, " ");
    var splitText = text.split('');
    console.log(splitText);

    var morseCode = ["A", ".-", "B", "-...", "C", "-.-.", "D", "-..", "E", ".", "F", "..-.", "G", "--.", "H", "....", "I", "..", "J", ".---",
        "K", "-.-.", "L", ".-..", "M", "--", "N", "-.", "O", "---", "P", ".--.", "Q", "--.-", "R", ".-.", "S", "...", "T", "-", "U", "..-",
        "V", "...-", "W", ".--", "X", "-..-", "Y", "-.--", "Z", "--.."];

    var string = [];
    for (var i in splitText) {
        if (splitText[i] === '') {
            delete splitText[i];
        }
        else {
            var a = morseCode.indexOf(splitText[i]);
            console.log(a);
            var letter = morseCode[a + 1];
            string.push(letter);
        }

        console.log(string)
    }
    document.getElementById("output").innerHTML = string.join(' ');
}
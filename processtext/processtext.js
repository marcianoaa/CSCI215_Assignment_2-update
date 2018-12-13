function processText() {

    var text = document.getElementById("input").value;
    text=text.toUpperCase();
    text=text.replace(/\./g,' '); //period to " "
    text=text.split(" ");

    var array=[];
    for (var x in text){
        if(text[x]==""){
            delete text[x];
        }
        else if(array.includes(text[x])){

            var a = array.indexOf(text[x]);
            array.splice(a+1, 1, array[a+1]+1);

        }
        else {
            array.push(text[x]);
            var a = array.indexOf(text[x]);
            array.splice(a+1, 0, 1);
        }

    }

    document.getElementById("output").innerHTML = array.join(" ");
}
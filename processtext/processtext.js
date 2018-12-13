function processText() {

    var text = document.getElementById("input").value;
    text=text.toUpperCase();
    text=text.replace(/\./g,' '); //period to " "
    text=text.split(" ");

    var list=[];
    for (var x in text){
        if(text[x]==""){
            delete text[x];
        }
        else if(list.includes(text[x])){

            var a = list.indexOf(text[x]);
            list.splice(a+1, 1, list[a+1]+1);

        }
        else {
            list.push(text[x]);
            var a = list.indexOf(text[x]);
            list.splice(a+1, 0, 1);
        }

    }

    document.getElementById("output").innerHTML = list.join(" ");
}
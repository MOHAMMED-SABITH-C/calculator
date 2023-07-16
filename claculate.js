function press(val){
    if(val== 'clear')
        document.getElementById("output").value='';
    else if(val== 'del'){
        document.getElementById("output").value=document.getElementById("output").value.slice(0,-1);
    }
    else if(val== '='){
        var text=document.getElementById("output").value;
        document.getElementById("output").value= eval(text);
    }
    else
    document.getElementById("output").value+=val;
}
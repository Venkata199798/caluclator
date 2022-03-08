//clear
var userinputvalel=document.getElementById("userinputval");
var cal2el=document.getElementById("cal2")



//backespace

function backspace(){
    back2=userinputvalel.value.slice(0, -1);
    userinputvalel.value=back2;
}


var his = document.getElementById("history")
var prev=""

function val(res){
    userinputvalel.value=userinputvalel.value+res;
    prev=userinputvalel.value+" = "
}
function calculate1(){
    if(userinputvalel.value==""){
        alert("Enter Only Digits")
    }
    else{
        var para=document.createElement("p")
        userinputvalel.value=eval(userinputvalel.value)
        prev=prev+userinputvalel.value;
        para.innerHTML=prev;
        his.appendChild(para)
    }
    // console.log(userinputvalel.value)
}
function clearval(){
    userinputvalel.value="";
}
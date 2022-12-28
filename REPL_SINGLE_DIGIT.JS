function Findpalindrome(TestStr) {
    var PlainStr= TestStr.toLowerCase().split("");
    for(var i=0; i <=(PlainStr.length); i++){
    if(PlainStr[i] == PlainStr[PlainStr.length-i-1]){
    return true;
    } else
    return false;
    }
    } 
    console.log(Findpalindrome("maam"));
    console.log(Findpalindrome("rar"));   
    console.log(Findpalindrome("kak"));
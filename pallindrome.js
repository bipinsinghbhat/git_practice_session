let string="naman";
function reverse(string){
    let bag="";
    for(let i=string.length-1;i>=0;i--){
        bag+=string[i];
    }
    return bag;
}
let reversed = reverse(string);

if(string==reversed){
    console.log("Palindrome");

}else{
    console.log("NA");
}

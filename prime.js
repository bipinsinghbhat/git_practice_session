
  function prime(number){
factors=0;
    for(let i=1;i=<num;i++){
      if(number%i==0){
         factors++;}
        }

 if(factors==2){
  return true;}
return false;


}
let answer=checkprime(7);
if(answer==true){
console.log("Prime Number")
else{
console.log("Not a Prime Number")
}
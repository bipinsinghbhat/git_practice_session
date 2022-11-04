  function prime(num){
    for(let i=1;i=<num;i++){
      if(num%i==0){
         count++;}
        }

 if(count==2){
  return false;}
return true;

}
let ans=prime(7);

console.log(ans);
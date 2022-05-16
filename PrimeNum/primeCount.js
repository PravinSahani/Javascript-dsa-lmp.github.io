// You need to return the count of Primes less than equal to N
// N: input number
function numberOfPrimes(N){
    var count =0;
    for(var i = 1; i<=N; i++){
        if(isPrime(i)){
            count++;
        }
    }
    return count;
}
// console.log(noOfPrimes(N));
// console.log(noOfPrimes(5000));

function isPrime(number)
 { 
   if (number <= 1)
   return false;

   // The check for the number 2 and 3
   if (number <= 3)
   return true;

   if (number%2 == 0 || number%3 == 0)
   return false;

   for (var i=5; i*i<=number; i=i+6)
   {
      if (number%i == 0 || number%(i+2) == 0)
      return false;
   }

   return true;
 }
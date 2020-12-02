let sum = 0;
let primeArray = [2];
let primeList;

document.getElementById("calculate").addEventListener("click", function(){
  sum = 0;
  primeArray = [2];
    calculate()
})

function calculate() {
  let numberOfTimes = document.getElementById("number").value

  let total = 0

  for (let y= 1; y <= numberOfTimes; y++) {
    total += prime(y)
  }
}

function prime(number) {
  
  let rootNum = Math.floor(Math.sqrt(number)); /*as we don't need to divide a number by any number larger than its square root, this derives the
          largest whole number that is smaller than the true square root of the given number*/
  
    if (number === 1){ //this tells the computer to do nothing in the case of specifically one
  
    }
    else if(number === 2) { //this tells the computer what to do in the instance of 2 specifically
      sum += number;
    } 
   
    else{
      let ctr = 0; //the ctr will make sure the number is not divisible by any other numbers.  If another number will divide into it, ctr increments
      for(let x = 2; x <= rootNum; x++) {
        if(number % x === 0) {
          ctr++
        }
      }
      if (ctr === 0) { //if it stayed at zero, the number is prime and we can add it to the sum
        sum += number;
        primeArray.push(number);
      }  
      primeList = primeArray.join(" <br>+ ")

      document.getElementById("numericValue").innerHTML = sum;
      document.getElementById("totalValue").innerHTML = `= ${sum}`;
      document.getElementById("process").innerHTML = primeList;
    }
    
  }
  


 
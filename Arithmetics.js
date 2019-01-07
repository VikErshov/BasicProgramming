const getGets = (arr) => {
    let index = 0;
  
    return () => {
      const toReturn = arr[index];
      index += 1;
      return toReturn;
    };
  };
  
  // This is the place where you must place your test data
  const test = [
    '3', // This is the first line from the test.
     '1'// This is the second line from the test.
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
let firstNum = +gets();
let secondNum = +gets();

let sum = firstNum + secondNum;
let difference = Math.abs(secondNum - firstNum);
let product = firstNum * secondNum;
let remainder = firstNum % secondNum;
let powered = Math.pow(firstNum, secondNum);

print(sum);
print(difference);
print(product);
print(remainder);
print(powered);

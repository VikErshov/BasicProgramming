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
    '10', // This is the first line from the test.
    '10' // This is the second line from the test.
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
let numberOfHalfLiterBottles = +gets() * 0.1;
let numberOfOneLiterBottles = +gets() * 0.25;
let sum = (numberOfHalfLiterBottles + numberOfOneLiterBottles).toFixed(2);
print(sum);

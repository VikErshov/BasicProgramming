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
    '2000' // This is the first line from the test.
     // This is the second line from the test.
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  let balance = +gets();
  let interest = (balance / 100) * 5;

  balance = (Math.round((balance + interest) * 100) / 100);
  print(balance.toFixed(2));
for (let index = 0; index < 2; index++) {
     interest = (balance / 100) * 5;
     balance = (Math.round((balance + interest) * 100) / 100);
     print(balance.toFixed(2));
}
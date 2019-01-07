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
    '0', 
     '2',
     '6',
     '0',
     
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

let days = +gets() * 24 * 60 * 60;
let hours = +gets() * 60 * 60;
let minutes = +gets() * 60;
let seconds = +gets();

let sum = days + hours + minutes + seconds;
print(sum);

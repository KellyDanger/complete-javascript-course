// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

let Data1 = [17, 21, 23];
let Data2 = [12, 5, -5, 0, 4];

let printForecast = (array) => {
  let newString = '';
  let num = 0;
  for (let dataPoint of array) {
    num++;
    newString += `...${dataPoint}*C in ${num} days`;
  }
  return newString;
};

console.log(printForecast(Data1));
console.log(printForecast(Data2));

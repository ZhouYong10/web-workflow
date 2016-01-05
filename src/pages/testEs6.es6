 var f = v => v;

 var f1 = () => 5;

 var sum = (num1, num2) => num1 + num2;

 var getTempItem = id => ({id: id, name: 'Temp'});

 const full = ({first, last}) => first + ' ' + last;

 const isEven = n => n % 2 == 0;
 const square = n => n * n;

 [1, 2, 3].map(x => x * x);

 var result = values.sort((a, b) => a - b);

 const numbers = (...nums) => nums;

 const headAndTail = (head, ...tail) => [head, tail];

 //带有默认参数值得函数
 function log(x, y = 'world'){
  console.log(x, y);
 }



 function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
 }

 function fetch(url, {method = 'GET'} = {}){
  console.log(method);
 }

module.exports = fetch;

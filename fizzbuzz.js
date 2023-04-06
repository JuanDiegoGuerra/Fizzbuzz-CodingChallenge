module.exports = function (str1 = 'Fizz', str2 = 'Buzz', n1 = 3, n2 =5) {
  let arr = [];

  for(let i = 1; i <= 100; i++) {
    if(i % n1 === 0 && i % n2 === 0) {
      arr.push(str1+str2)
    } else if (i % n1 === 0) {
      arr.push(str1)
    }
    else if (i % n2 === 0) {
      arr.push(str2);
    } else {
      arr.push(i)
    }  
}
return arr
}
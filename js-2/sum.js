function sum (arr){

    let n = 0

    for (let i = 0; i < arr.length; i++) {
        n += arr[i];
      }
      return n
}
console.log(sum([1, 2, 3]))
console.log(sum([10, 8, 12, 5]))
console.log(sum([]))
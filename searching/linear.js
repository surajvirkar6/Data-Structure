/*
Time Complexity 
Best case:- O(1) => element found at start
Average and worst case:- O(n) => element found at last

Space complexity = O(1)
*/

let array1 = [12, 34, 56, 32, 89, 49];
const target1 = 89;

let array2 = [{ age: 12 }, { age: 34 }, { age: 56 }];
let target2 = 34;

let result1 = search1(array1, target1);
let result2 = search2(array2, target2);

function search1(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (target == array[i]) {
      return i;
    }
  }
  return -1;
}

function search2(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (target == array[i].age) {
      return i;
    }
  }
  return -1;
}

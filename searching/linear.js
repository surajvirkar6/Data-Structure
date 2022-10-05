/*
Time Complexity 
Best case:- O(1) => element found at start
Average and worst case:- O(n) => element found at last
*/

let array1 = [12, 34, 56, 32, 89, 49];
const target1 = 89;

let result1 = search1(array1, target1);

function search1(array, target) {
  array.map((item, index) => {
    item == target ? index : -1;
  });
}

/* 
It works efficiently on already sorted lists.

Time complexity 
Best case:- O(1) => element found at middle.
Average and worst case:- O(log n)

How??

n, n/2, n/4, n/8 .... n/2^k = 1
n/2^k = 1
n = 2^k
log n = k log 2   // log on both side
k = log n / log 2
k = log n (*with base 2)


Space complexity = O(1)
*/

let array = [10, 12, 24, 29, 39, 40, 51, 56, 69];
let k = 69;

let result = search(array, k, 0, array.length - 1);

console.log(result);

function search(array, k, start, end) {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] == k) {
      return mid;
    }

    if (k > array[mid]) {
      return search(array, k, mid + 1, end);
    } else {
      return search(array, k, start, mid - 1);
    }
  }
  return -1;
}
